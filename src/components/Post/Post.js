import React from "react";
import PropTypes from "prop-types";
import "prismjs/themes/prism-okaidia.css";

import asyncComponent from "../AsyncComponent";
import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";
import Product from "../Article/Product";
import Comments from "./Comments";
import NextPrev from "./NextPrev";

const Share = asyncComponent(() =>
  import("./Share")
    .then(module => {
      return module.default;
    })
    .catch(error => {})
);

const Post = props => {
  const { post, productSlug, productName, facebook, next: nextPost, prev: prevPost, theme } = props;

  return (
    <React.Fragment>
      <header>
        <Headline title={productName} theme={theme} />
      </header>
      <Product post={post} theme={theme} />
      <Bodytext html={post.description.json.content[0]} theme={theme} />
      <footer>
        <Share post={post} theme={theme} />
        <NextPrev next={nextPost} prev={prevPost} theme={theme} />
        <Comments slug={productSlug} facebook={facebook} theme={theme} />
      </footer>
    </React.Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  authornote: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
  theme: PropTypes.object.isRequired,
  productSlug: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired
};

export default Post;
