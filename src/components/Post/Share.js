import React from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon
} from "react-share";

import config from "../../../content/meta/config";

const PostShare = props => {
  const url = config.siteUrl + props.productSlug;

  const iconSize = 36;
  const filter = count => (count > 0 ? count : "");

  return (
    <React.Fragment>
      <div className="share">
        <span className="label">SHARE</span>
        <div className="links">
          <TwitterShareButton
            url={url}
            title={props.productName}
            additionalProps={{
              "aria-label": "Twitter share"
            }}
          >
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
          <GooglePlusShareButton
            url={url}
            additionalProps={{
              "aria-label": "Google share"
            }}
          >
            <GooglePlusIcon round size={iconSize} />
            <GooglePlusShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </GooglePlusShareCount>
          </GooglePlusShareButton>
          <FacebookShareButton
            url={url}
            quote={`${props.productName} - ${props.shortDescription}`}
            additionalProps={{
              "aria-label": "Facebook share"
            }}
          >
            <FacebookIcon round size={iconSize} />
            <FacebookShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </FacebookShareCount>
          </FacebookShareButton>
          <LinkedinShareButton
            url={url}
            title={props.productName}
            description={props.shortDescription}
            additionalProps={{
              "aria-label": "LinkedIn share"
            }}
          >
            <LinkedinIcon round size={iconSize} />
            <LinkedinShareCount url={url}>
              {count => <div className="share-count">{filter(count)}</div>}
            </LinkedinShareCount>
          </LinkedinShareButton>
        </div>
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .share {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .links {
          display: flex;
          flex-direction: row;

          :global(.SocialMediaShareButton) {
            margin: 0 0.8em;
            cursor: pointer;
          }
        }

        .label {
          font-size: 1.2em;
          margin: 0 1em 1em;
        }

        @from-width tablet {
          .share {
            flex-direction: row;
            margin: ${props.theme.space.inset.l};
          }
          .label {
            margin: ${props.theme.space.inline.m};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

PostShare.propTypes = {
  props: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  productSlug: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired
};

export default PostShare;
