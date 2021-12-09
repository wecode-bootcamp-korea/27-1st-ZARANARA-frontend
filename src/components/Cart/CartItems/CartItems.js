import React from 'react';
import CartItem from '../CartItem/CartItem';
import { API } from '../../../config';

import './CartItems.scss';

const CartItems = ({
  cartItems,
  onDeleteItem,
  onResetItem,
  onIncreaseCartItem,
  onDecreaseCartItem,
}) => {
  const handleResetItem = () => {
    fetch(`${API.USER}/cart`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(result => {
        if (result.MESSAGE === 'ALL_DELETED') {
          onResetItem();
          window.location.reload();
        } else if (result.MESSAGE === 'DOES_NOT_EXIST')
          alert('장바구니가 비었습니다.');
      })
      .catch(error => alert(error));
  };

  return (
    <article className="cartContentLeft">
      <ul className="cartItems">
        {cartItems.map(item => (
          <CartItem
            key={item.cart_id}
            itemInfo={item}
            onDeleteItem={onDeleteItem}
            onIncreaseCartItem={onIncreaseCartItem}
            onDecreaseCartItem={onDecreaseCartItem}
          />
        ))}
      </ul>
      <div className="contentFooter">
        <button className="clearCartButton" onClick={() => handleResetItem()}>
          장바구니 비우기
        </button>
      </div>
    </article>
  );
};

export default CartItems;
