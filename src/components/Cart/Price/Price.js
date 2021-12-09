import React from 'react';

import './Price.scss';

const Price = ({ totalCount, totalPrice }) => {
  return (
    <article className="cartContentRight">
      <span className="totalCount">{totalCount} 제품</span>
      <div className="totalPriceWrapper">
        <span className="totalText">합계:</span>
        <span className="totalPrice">{totalPrice?.toLocaleString()}원</span>
      </div>
      <p className="promotionInfo">
        프로모션 코드가 있으신가요? 나중에 결제 페이지에서 입력하십시오.
      </p>
      <button className="orderButton">주문하기</button>
    </article>
  );
};

export default Price;
