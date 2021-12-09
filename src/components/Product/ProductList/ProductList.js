import React from 'react';
import { Link } from 'react-router-dom';
import ProductContent from './ProductContent/ProductContent';

import './ProductList.scss';

const ProductList = ({ productImages }) => {
  return (
    <section className="productListContainer">
      <div className="info">
        <div>
          <h2 className="title">이런 크리스마스 어떠세요?</h2>
          <p className="desctiption">크리스마스 꾸미기 아이와 함께 하세요</p>
        </div>
        <Link to="/category/1" className="linkToGiftPage">
          신제품 보러가기
        </Link>
      </div>
      <ul className="productImages">
        {productImages.map(product => (
          <ProductContent key={product.set_id} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
