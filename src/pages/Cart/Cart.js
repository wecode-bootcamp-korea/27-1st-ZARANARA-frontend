import React, { useEffect, useState } from 'react';

import CartList from '../../components/Cart/CartList/CartList';
import LaterShop from '../../components/Cart/LaterShop/LaterShop';
import { API } from '../../config';

import './Cart.scss';

const Cart = () => {
  const [selectCart, setSelectCart] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const totalCount =
    cartItems?.length > 0
      ? cartItems?.reduce((acc, cur) => (acc += cur.quantity), 0)
      : 0;
  const totalPrice = cartItems?.reduce(
    (acc, cur) => (acc += cur.price * cur.quantity),
    0
  );

  useEffect(() => {
    fetch(`${API.USER}/cart`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => setCartItems(data.result));
  }, []);

  const handleDeleteItem = cartItem => {
    setCartItems(cartItems =>
      cartItems.filter(item => item.cart_id !== cartItem.cart_id)
    );
  };

  const handleResetItem = () => {
    setCartItems([]);
  };

  const handleIncreaseCartItem = cartItem => {
    setCartItems(cartItems =>
      cartItems.map(item => {
        if (item.cart_id === cartItem.cart_id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return item;
      })
    );
  };

  const handleDecreaseCartItem = cartItem => {
    setCartItems(cartItems =>
      cartItems.map(item => {
        if (item.cart_id === cartItem.cart_id) {
          const quantity = cartItem.quantity - 1;
          return { ...cartItem, quantity: quantity < 0 ? 0 : quantity };
        }
        return item;
      })
    );
  };

  const handleTogglePage = boolean => {
    setSelectCart(boolean);
  };

  return (
    <main className="mainContainer">
      <section className="tabContainer">
        <div className={`tabs ${selectCart ? 'cart' : 'latershop'}`}>
          <div className="transBox" />
          <button
            className="transButton cartButton"
            onClick={() => handleTogglePage(true)}
          >
            {`장바구니 (${totalCount})`}
          </button>
          <button
            className="transButton laterShoppingButton"
            onClick={() => handleTogglePage(false)}
          >
            나중에 쇼핑하기 (0)
          </button>
        </div>
      </section>
      <section className="cartContentContainer">
        <section className="cartContentWrapper">
          {selectCart ? (
            <CartList
              cartItems={cartItems}
              onDeleteItem={handleDeleteItem}
              onResetItem={handleResetItem}
              onIncreaseCartItem={handleIncreaseCartItem}
              onDecreaseCartItem={handleDecreaseCartItem}
              totalCount={totalCount}
              totalPrice={totalPrice}
            />
          ) : (
            <LaterShop />
          )}
        </section>
      </section>
    </main>
  );
};

export default Cart;
