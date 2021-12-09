import { useNavigate } from 'react-router';

import './Product.scss';

function Product({ productInfo, handleAddCart }) {
  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`/detail/${id}`);
  };

  return (
    <li className="productItem">
      <div className="wrapper">
        <div className="imgBox">
          <div
            className="img"
            style={{ backgroundImage: `url(${productInfo.image})` }}
            alt={productInfo.alt}
            onClick={() => goToDetail(productInfo.id)}
          />
          <button
            className="cartButton"
            onClick={() => handleAddCart(productInfo)}
          >
            장바구니에 담기
          </button>
        </div>
      </div>
      <div className="productinfo">
        <h3 className="title">{productInfo.name}</h3>
        <h3 className="price">
          {Number(productInfo.price?.split('.')[0]).toLocaleString()}원
        </h3>
      </div>
    </li>
  );
}

export default Product;
