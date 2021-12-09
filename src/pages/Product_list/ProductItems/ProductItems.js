import React from 'react';
import Product from './../Product/Product';
import './ProductItems.scss';

function ProductItems({ productList, handleAddCart }) {
  return (
    <div className="productItemsContainer">
      <ul className="productItems">
        {productList.map(product => (
          <Product
            key={product.id}
            productInfo={product}
            handleAddCart={handleAddCart}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductItems;
