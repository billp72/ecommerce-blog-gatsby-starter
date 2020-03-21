import React from "react";
import PropTypes from "prop-types";

import Headline from "../BlogArticle/Headline";
import Bodytext from "../BlogArticle/Bodytext";

const Page = props => {
  const {
    page: {
      html,
      frontmatter: { title }
    },
    theme
  } = props;

  return (
    <React.Fragment>
      <header>
        <Headline title={title} theme={theme} />
      </header>
      <Bodytext html={html} theme={theme} />
    </React.Fragment>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Page;
