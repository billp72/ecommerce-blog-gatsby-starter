import React, { useState } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import config from "../../../content/meta/config";

const Product = props => {
  const { post, theme } = props;
  const [imageId, setImageId] = useState();
  /* const createString = values => {
    return values
      .map(option => {
        const price =
          option.priceChange >= 0 ? `[+${option.priceChange}]` : `[${option.priceChange}]`;
        return `${option.name}${price}`;
      })
      .join("|");
  };

  const updatePrice = (basePrice, values) => {
    const selectedOption = values.find(option => option.name === this.state.selected);
    return (basePrice + selectedOption.priceChange).toFixed(2);
  };*/

  return (
    <React.Fragment>
      <Img
        className="main"
        fluid={imageId === undefined ? post.mainImage.fluid : post.otherImages[imageId].fluid}
      />
      <div className="gallery">
        {post.otherImages &&
          post.otherImages.map((img, id) => (
            <div key={img.id} className="imageGallary" onClick={() => setImageId(id)}>
              <Img style={{ top: "10px" }} key={img.id} fixed={img.fixed} />
            </div>
          ))}
      </div>
      <button
        className="snipcart-add-item"
        data-item-id={post.id}
        data-item-name={post.productName}
        data-item-image={post.mainImage.fluid.src}
        data-item-price={post.discountPrice ? post.discountPrice : post.price}
        data-item-url={`${config.siteUrl}/${post.productSlug}`}
        //data-item-custom1-name={item.frontmatter.customField ? item.frontmatter.customField.name : null}
        //data-item-custom1-options={createString(item.frontmatter.customField.values)}
        //data-item-custom1-value={state.selected}
      >
        Add to Cart
      </button>
      <style jsx>{`
        .gallery {
          display: flex;
          flex-wrap: wrap;
          padding: 0 4px;
        }
        .imageGallary {
          flex: 20%;
          max-width: 20%;
          padding: 0 4px;
          cursor: pointer;
        }
        .main {
          padding: 10px 0 0 0;
        }
        button {
          padding: 20px;
          background: ${theme.color.brand.primary};
          color: white;
          font-weight: 700;
          margin-top: 10px;
          display: block;
        }
        .bodytext {
          animation-name: bodytextEntry;
          animation-duration: ${theme.time.duration.long};
        }
        @keyframes bodytextEntry {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Product.propTypes = {
  props: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

export default Product;
