import PropTypes from "prop-types";
import React from "react";
import { getPath } from "../../utils/helpers";
import Item from "./Item";
const Store = props => {
  const { posts, theme, facebook } = props;

  return (
    <React.Fragment>
      <main className="main">
        <ul className="cards">
          {posts.nodes.map((post, index) => {
            if (getPath() == "/store") {
              return <Item key={post.productSlug} post={post} theme={theme} facebook={facebook} />;
            } else {
              if (index === 3) return;
              return <Item key={post.productSlug} post={post} theme={theme} facebook={facebook} />;
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

Store.propTypes = {
  posts: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  facebook: PropTypes.object.isRequired
};

export default Store;
