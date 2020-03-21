import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Store from "../components/Store";
import Seo from "../components/Seo";

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const {
      data: {
        allStore,
        site: {
          siteMetadata: { facebook }
        }
      }
    } = this.props;
    return (
      <React.Fragment>
        <hr ref={this.separator} />

        <ThemeContext.Consumer>
          {theme => <Store posts={allStore} theme={theme} facebook={facebook} />}
        </ThemeContext.Consumer>

        <Seo facebook={facebook} />

        <style jsx>{`
          hr {
            margin: 0;
            border: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  {
    allStore: allContentfulFashionTwoBags {
      nodes {
        id
        productName
        productSlug
        shortDescription
        price
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
