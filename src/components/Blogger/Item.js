import { FaCalendar } from "react-icons/fa/";
import { FaTag } from "react-icons/fa/";
import { FaUser } from "react-icons/fa/";
import { FaComment } from "react-icons/fa/";
import Img from "gatsby-image";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import CommentCount from "../CommentCount";

const Item = props => {
  const {
    facebook,
    theme,
    post: {
      excerpt,
      fields: { slug, prefix },
      frontmatter: {
        title,
        category,
        author,
        cover: {
          children: [{ fluid }]
        }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <li>
        <Link to={slug} key={slug} className="link">
          <div className="gatsby-image-outer-wrapper">
            <Img fluid={fluid} />
          </div>
          <h2>{title}</h2>
          <p className="meta">
            <span>
              <FaCalendar size={18} />
              <span style={{ fontWeight: 700, marginLeft: "5px" }}>{prefix}</span>
            </span>
            <span>
              <FaUser size={18} />
              <span style={{ fontWeight: 700, marginLeft: "5px" }}>{author}</span>
            </span>
            {category && (
              <span>
                <FaTag size={18} />
                <span style={{ fontWeight: 700, marginLeft: "5px" }}>{category}</span>
              </span>
            )}
            {CommentCount && (
              <span>
                <FaComment size={18} />
                comments
                <span style={{ fontWeight: 700, marginLeft: "5px" }}>
                  <CommentCount slug={slug} facebook={facebook} />
                </span>
              </span>
            )}
          </p>
          <p>{excerpt}</p>
        </Link>
      </li>

      {/* --- STYLES --- */}
      <style jsx>{`
        :global(.gatsby-image-wrapper) {
          height: 200px;
          overflow: hidden;
          border-radius: ${theme.size.radius.default};
          border: 1px solid ${theme.line.color};
        }
        li {
          flex: 0 1 33%;
          padding: 10px;
          border: 1px solid transparent;
          border-radius: ${theme.size.radius.default};
          margin: ${`calc(${theme.space.default} * 2) 0 calc(${theme.space.default} * 3)`};
          padding: ${theme.space.inset.s};
        }
        .meta {
          display: flex;
          flex-flow: row wrap;
          font-size: 0.8em;
          padding: ${theme.space.s} ${theme.space.s} ${theme.space.s} 0;
          background: transparent;

          :global(svg) {
            fill: ${theme.icon.color};
            margin: ${theme.space.inline.xs};
          }
          span {
            align-items: center;
            display: flex;
            text-transform: uppercase;
            margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
          }
        }
        @below tablet {
          li {
            flex: 0 1 100%;
            border: 1px solid grey;
          }

          h1 {
            font-size: ${`calc(${theme.blog.h1.size} * 1.2)`};
            padding: ${`calc(${theme.space.default} * 1.5) ${theme.space.default} 0`};
            transition: all 0.5s;
          }
          .meta {
            padding: ${`calc(${theme.space.m} * 1.5) ${theme.space.m}`};
          }
          p {
            padding: 0 ${theme.space.default};
          }
        }

        @between-from tablet mobile {
          li {
            flex: 0 1 100%;
            border: 1px solid grey;
          }

          h1 {
            font-size: ${`calc(${theme.blog.h1.size} * 1.2)`};
            padding: ${`calc(${theme.space.default} * 1.5) ${theme.space.default} 0`};
            transition: all 0.5s;
          }
          .meta {
            padding: ${`calc(${theme.space.m} * 1.5) ${theme.space.m}`};
          }
          p {
            padding: 0 ${theme.space.default};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Item.propTypes = {
  post: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  facebook: PropTypes.object.isRequired
};

export default Item;
