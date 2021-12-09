import React from 'react';
import ProductInfoValue from './ProductInfoValue/ProductInfoValue';

import './ProductInfoTable.scss';

const ProductInfoTable = ({
  increaseAmount,
  decreaseAmount,
  productAmount,
  productOptions,
}) => {
  return (
    <div className="productInfoTable">
      <div className="productInfoHeader">
        {productOptions?.[0].size_information.split(',').map(item => (
          <span className="productValue">{item}</span>
        ))}
      </div>
      <ul className="productInfoCons">
        <ProductInfoValue
          productOptions={productOptions}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
          productAmount={productAmount}
        />
      </ul>
    </div>
  );
};

export default ProductInfoTable;
