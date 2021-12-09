import React from 'react';
import CartItems from '../CartItems/CartItems';
import Price from '../Price/Price';

import './CartList.scss';

const CartList = ({
  cartItems,
  onDeleteItem,
  onResetItem,
  onIncreaseCartItem,
  onDecreaseCartItem,
  totalCount,
  totalPrice,
}) => {
  return cartItems?.length > 0 ? (
    <>
      <CartItems
        cartItems={cartItems}
        onDeleteItem={onDeleteItem}
        onResetItem={onResetItem}
        onIncreaseCartItem={onIncreaseCartItem}
        onDecreaseCartItem={onDecreaseCartItem}
      />
      <Price totalCount={totalCount} totalPrice={totalPrice} />
    </>
  ) : (
    <p className="cartEmptyMent">고객님의 장바구니가 비어 있습니다.</p>
  );
};

export default CartList;
