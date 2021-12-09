import React from 'react';
import { Link } from 'react-router-dom';
import './NavCartItem.scss';

const NavCartItem = ({ itemInfo }) => {
  return (
    <li className="navCartItem">
      <div className="photoWrapper">
        <Link to={`/detail/${itemInfo.product_id}`} className="photoLink">
          <div
            className="photo"
            style={{ backgroundImage: `url(${itemInfo.image})` }}
            alt={itemInfo.name}
          />
        </Link>
      </div>
      <div className="details">
        <Link to={`/detail/${itemInfo.product_id}`} className="name">
          {itemInfo.name}
        </Link>
        <div className="priceQuantity">
          <span className="totalPrice">
            {(itemInfo.price * itemInfo.quantity).toLocaleString()}원
          </span>
        </div>
        <span className="dimensions">{itemInfo.size}</span>
      </div>
    </li>
  );
};

export default NavCartItem;
