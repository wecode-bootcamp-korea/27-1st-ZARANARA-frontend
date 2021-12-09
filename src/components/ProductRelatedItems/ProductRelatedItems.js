import React from 'react';

import ProductRelatedContent from './ProductRelatedContent/ProductRelatedContent';
import './ProductRelatedItems.scss';

const ProductRelatedItmes = ({
  relatedProducts,
  handleNextSlide,
  slideRef,
}) => {
  return (
    <>
      {relatedProducts?.map(el => {
        return (
          <ProductRelatedContent
            key={el.id}
            id={el.id}
            imageUrls={el.image_urls}
            price={el.price}
            name={el.name}
            handleNextSlide={handleNextSlide}
            slideRef={slideRef}
          />
        );
      })}
    </>
  );
};

export default ProductRelatedItmes;
