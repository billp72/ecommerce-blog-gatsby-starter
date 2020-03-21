import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
require("prismjs/themes/prism-okaidia.css");

import Seo from "../components/Seo";
import Article from "../components/Article";
import Post from "../components/Post";
import { ThemeContext } from "../layouts";

const PostTemplate = props => {
  const {
    data: {
      item,
      site: {
        siteMetadata: { facebook }
      }
    },
    pageContext: { next, prev }
  } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <Post post={item} next={next} prev={prev} facebook={facebook} theme={theme} />
          </Article>
        )}
      </ThemeContext.Consumer>

      <Seo data={item} facebook={facebook} />
    </React.Fragment>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default PostTemplate;

//eslint-disable-next-line no-undef
export const testQuery = graphql`
  query BagTemplateQuery($slug: String!) {
    item: contentfulFashionTwoBags(productSlug: { eq: $slug }) {
      id
      productSlug
      productName
      shortDescription
      description {
        json
      }

      mainImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      otherImages {
        id
        fixed(width: 100) {
          ...GatsbyContentfulFixed_withWebp
        }
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      price
      discountPrice
      tags
      rating
      color
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
