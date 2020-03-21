//const webpack = require("webpack");
const _ = require("lodash");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const Promise = require("bluebird");

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    const separtorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0;
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;

    if (source !== "parts") {
      createNodeField({
        node,
        name: `slug`,
        value: `${separtorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`
      });
    }
    createNodeField({
      node,
      name: `prefix`,
      value: separtorIndex ? slug.substring(1, separtorIndex) : ""
    });
    createNodeField({
      node,
      name: `source`,
      value: source
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

    const blogTemplate = path.resolve("./src/templates/BlogTemplate.js");
    const pageTemplate = path.resolve("./src/templates/PageTemplate.js");
    const categoryTemplate = path.resolve("./src/templates/CategoryTemplate.js");
    const storeTemplate = path.resolve("./src/templates/StoreTemplate.js");

    // Do not create draft post files in production.
    let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development"
    console.log(`Using environment config: '${activeEnv}'`)
    let filters = `filter: { fields: { slug: { ne: null } } }`;
    if (activeEnv == "production") filters = `filter: { fields: { slug: { ne: null } , prefix: { ne: null } } }`

      const file = graphql(
        `
          {
            allMarkdownRemark(
              ` + filters + `
              sort: { fields: [fields___prefix], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                    prefix
                    source
                  }
                  frontmatter {
                    title
                    category
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          Promise.reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;

        // Create category list
        const categorySet = new Set();
        items.forEach(edge => {
          const {
            node: {
              frontmatter: { category }
            }
          } = edge;

          if (category && category !== null) {
            categorySet.add(category);
          }
        });

        // Create category pages
        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/category/${_.kebabCase(category)}/`,
            component: categoryTemplate,
            context: {
              category
            }
          });
        });

        // Create posts
        const blogPosts = items.filter(item => item.node.fields.source === "posts");
        blogPosts.forEach(({ node }, index) => {
          const slug = node.fields.slug;
          const next = index === 0 ? undefined : blogPosts[index - 1].node;
          const prev = index === blogPosts.length - 1 ? undefined : blogPosts[index + 1].node;
          const source = node.fields.source;
          //const slug = `blog/${s}`;
          createPage({
            path: slug,
            component: blogTemplate,
            context: {
              slug,
              prev,
              next,
              source
            }
          });
        });

        // and pages.
        const pages = items.filter(item => item.node.fields.source === "pages");
        pages.forEach(({ node }) => {
          const slug = node.fields.slug;
          const source = node.fields.source;

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug,
              source
            }
          });
        });
      })

  const contentful = graphql(`
    {
      allBags: allContentfulFashionTwoBags {
        nodes {
          productName
          productSlug
        }
      }
    }
  `).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}
    
		result.data.allBags.nodes.forEach((item, index) => {
      const next = index === 0 ? undefined : result.data.allBags.nodes[index - 1];
      const prev = index === result.data.allBags.nodes.length - 1 ? undefined : result.data.allBags.nodes[index + 1];
      //create product pages
      createPage({
        path: item.productSlug,
        component: storeTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          prev,
          next,
          slug: item.productSlug,
        },
      });
    });
  });
  return Promise.all([file, contentful]);
};


exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
  switch (stage) {
    case `build-javascript`:
      actions.setWebpackConfig({
        plugins: [
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: "./report/treemap.html",
            openAnalyzer: true,
            logLevel: "error",
            defaultSizes: "gzip"
          })
        ]
      });
  }
};
