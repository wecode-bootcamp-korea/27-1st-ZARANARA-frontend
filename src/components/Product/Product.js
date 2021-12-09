import React, { useState, useEffect } from 'react';

import ProductList from './ProductList/ProductList';
import { API } from '../../config';

import './Product.scss';

const Product = () => {
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    fetch(`${API.PRODUCT}/set?offset=0&limit=2&categoryId=8`)
      .then(res => res.json())
      .then(data => setProductImages(data.list_item));
  }, []);

  return (
    <section className="productContainer">
      <ProductList productImages={productImages} />
    </section>
  );
};

export default Product;
