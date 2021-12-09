import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import ProductItems from '../ProductItems/ProductItems';
import FilterAside from '../FilterAside/FilterAside';
import { API } from '../../../config';

import './ProductList.scss';

const MAP_ID_TO_ROUTE = {
  1: 'isNew=1',
  2: 'isPopular=1',
  3: 'themeId=3',
  4: 'categoryId=4',
  5: 'categoryId=5',
  6: 'categoryId=6',
  7: 'categoryId=7',
  8: 'categoryId=8',
};

function ProductList() {
  const params = useParams();

  const [productList, setProductList] = useState([]);
  const [isFilterOn, setIsFilterOn] = useState(false);

  useEffect(() => {
    const productId = params.id;
    fetch(`${API.PRODUCT}?${MAP_ID_TO_ROUTE[productId]}`)
      .then(res => res.json())
      .then(result => setProductList(result.results));
  }, [params]);

  const handleAddCart = productInfo => {
    fetch(`${API.USER}/cart`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        product_id: productInfo.id,
        quantity: 1,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.MESSAGE === 'SUCCESS') {
          alert('장바구니에 담겼습니다.');
          window.location.reload();
        } else if (result.MESSAGE === 'ITEM_ALREADY_EXIST')
          alert('이미 장바구니에 있는 상품입니다.');
        else if (result.ERROR === 'INVALID_TOKEN')
          alert('로그인 후 장바구니에 담아주세요.');
      })
      .catch(error => alert(error));
  };

  const handleOpenFilterAside = () => {
    setIsFilterOn(!isFilterOn);
  };

  const handleFilterTopPrice = () => {
    const topPrice = [...productList].sort((a, b) => b.price - a.price);
    setProductList(topPrice);
  };

  const handleFilterLowerPrice = () => {
    const topPrice = [...productList].sort((a, b) => a.price - b.price);
    setProductList(topPrice);
  };

  return (
    <main className="productList">
      <section className="filterContainer">
        <div className="filterWrapper">
          <span className="productCount">{productList.length}제품</span>
          <button className="productFilter" onClick={handleOpenFilterAside}>
            + 필터
          </button>
        </div>
      </section>
      <section className="productContainer">
        <ProductItems productList={productList} handleAddCart={handleAddCart} />
      </section>
      <FilterAside
        isFilterOn={isFilterOn}
        handleOpenFilterAside={handleOpenFilterAside}
        handleFilterLowerPrice={handleFilterLowerPrice}
        handleFilterTopPrice={handleFilterTopPrice}
      />
    </main>
  );
}

export default ProductList;
