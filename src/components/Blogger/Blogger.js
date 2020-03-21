import PropTypes from "prop-types";
import React from "react";
import { getPath } from "../../utils/helpers";
import Item from "./Item";

const Blogger = props => {
  const { posts, theme, facebook } = props;

  return (
    <React.Fragment>
      <main className="main">
        <ul className="cards">
          {posts.map((post, index) => {
            const {
              node,
              node: {
                fields: { slug }
              }
            } = post;
            if (getPath() == "/blog") {
              return <Item key={slug} post={node} theme={theme} facebook={facebook} />;
            } else {
              if (index === 3) return;
              return <Item key={slug} post={node} theme={theme} facebook={facebook} />;
            }
          })}
        </ul>
      </main>

      {/* --- STYLES --- */}
      <style jsx>{`
        .main {
          padding: 20px;
        }
        .cards {
          display: flex;
          flex-wrap: wrap;
          list-style-type: none;
        }
      `}</style>
    </React.Fragment>
  );
};

Blogger.propTypes = {
  posts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
  facebook: PropTypes.object.isRequired
};

export default Blogger;
