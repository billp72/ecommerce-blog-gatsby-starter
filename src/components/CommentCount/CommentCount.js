import React from "react";
import PropTypes from "prop-types";
import FacebookProvider, { CommentsCount as FBComments } from "react-facebook";

import config from "../../../content/meta/config";

const CommentCount = props => {
  const { facebook, slug } = props;

  return (
    <FacebookProvider appId={facebook.appId}>
      <FBComments href={`${config.siteUrl}${slug}`} />
    </FacebookProvider>
  );
};

CommentCount.propTypes = {
  slug: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired
};

export default CommentCount;
