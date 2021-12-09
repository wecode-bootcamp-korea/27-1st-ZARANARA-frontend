import React from 'react';
import { Link } from 'react-router-dom';
import './ProductRelateContent.scss';

const ProductRelatedContent = ({ id, imageUrls, name, price, slideRef }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className="slideContainer">
        <div className="productRelatedImg">
          <div className="productRelatedInsideArrow" />
        </div>
        <div className="slideWrapperTest">
          <div className="productRelatedSlideWrap" ref={slideRef}>
            <div className="productRelatedSlideConWrap">
              <div className="productRelatedSliderWrapper">
                <img
                  className="productRelatedSlider"
                  src={imageUrls?.[0]}
                  alt="귀여운 원숭이 인형"
                />
                <img
                  className="productRelatedSlider"
                  src={imageUrls?.[1]}
                  alt="귀여운 원숭이 인형"
                />
              </div>
              <h2 className="title">{name}</h2>
              <div className="price">
                {Number(price?.split('.')[0]).toLocaleString()}원
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductRelatedContent;
