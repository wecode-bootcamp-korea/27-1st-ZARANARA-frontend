import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';
import './ProductInfo.scss';

const ProductInfo = ({
  spotdata,
  isRadioActive,
  handleInfoMouseEnter,
  handleInfoMouseLeave,
}) => {
  const { item_alt, name, keyword, price } = spotdata;

  return (
    <Link
      to={`/detail/${spotdata.id}`}
      alt={item_alt}
      className={`container${isRadioActive ? ' active' : ''}`}
      onMouseOver={handleInfoMouseEnter}
      onMouseLeave={handleInfoMouseLeave}
    >
      <div className="header">
        <div className="inner">
          <span className="new">New</span>
          <h3 className="title">{name}</h3>
          <p className="description">{keyword}</p>
        </div>
        <MdArrowForwardIos className="rigthArrow" />
      </div>
      <span className="price">
        {Number(price?.split('.')[0]).toLocaleString()}원
      </span>
    </Link>
  );
};

export default ProductInfo;
