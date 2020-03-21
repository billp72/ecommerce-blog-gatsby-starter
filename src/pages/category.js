import { FaTag } from "react-icons/fa/";
import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Article from "../components/BlogArticle/";
import Headline from "../components/BlogArticle/Headline";
import List from "../components/List";
import Seo from "../components/Seo";

const CategoryPage = props => {
  const {
    data: {
      allItems: { nodes },
      posts: { edges: posts },
      site: {
        siteMetadata: { facebook }
      }
    }
  } = props;

  const stores = theme => {
    if (nodes) {
      return (
        <section key={nodes[0].id}>
          <h2>
            <FaTag /> {nodes[0].storeCategory}
          </h2>
          <List edges={nodes} theme={theme} />
        </section>
      );
    }
  };
  // Create category list
  const categories = {};
  posts.forEach(edge => {
    const {
      node: {
        frontmatter: { category }
      }
    } = edge;

    if (category && category != null) {
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(edge);
    }
  });

  const categoryList = [];

  for (var key in categories) {
    categoryList.push([key, categories[key]]);
  }

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline title="Posts by categories" theme={theme} />
            </header>
            {categoryList.map(item => (
              <section key={item[0]}>
                <h2>
                  <FaTag /> {item[0]}
                </h2>
                <List edges={item[1]} theme={theme} />
              </section>
            ))}
            {stores(theme)}
            {/* --- STYLES --- */}
            <style jsx>{`
              h2 {
                margin: 0 0 0.5em;
              }
              h2 :global(svg) {
                height: 0.8em;
                fill: ${theme.color.brand.primary};
              }
            `}</style>
          </Article>
        )}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />
    </React.Fragment>
  );
};

CategoryPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default CategoryPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query PostsQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            author
            cover {
              children {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    allItems: allContentfulFashionTwoBags {
      nodes {
        id
        productName
        productSlug
        shortDescription
        price
        storeCategory
        discountPrice
        tags
        rating
        displayBadge
        mainImage {
          fluid(maxWidth: 600, maxHeight: 350) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
