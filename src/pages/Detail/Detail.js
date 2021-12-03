import React, { useState, useRef, useEffect } from 'react';
import DetailModal from '../../components/DetailModal/DetailModal';
import './Detail.scss';

const Detail = () => {
  const [number, setNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); //모달 상태 관리 : 기본값 - 닫힘
  const dimmerRef = useRef();

  useEffect(() => {
    // dimmerRef.current.style;
    // dimmerRef.current.style.display = 'block';
  }, [isModalOpen]); // 의존, 뭘 의존하냐? 예슬님이 주는 커피 / 조건 /

  const increaseAmount = () => {
    setNumber(number + 1);
  };

  const decreaseAmount = () => {
    if (number === 0) return;
    setNumber(number - 1);
  };

  const openModal = () => {
    setIsModalOpen(true); //true
    // 열림 닫힘 반복할 수 있음
  };

  const closeModal = () => {
    // setIsModalOpen(false); //false
    if (isModalOpen == true) return setIsModalOpen(false);
  };

  return (
    <div className="detail" onClick={closeModal}>
      {isModalOpen && <div className="dimmer" ref={dimmerRef}></div>}
      <div className="leftContainer">
        <img
          src="https://static.zarahome.net/8/photos4/2021/I/4/1/p/9336/060/250/9336060250_2_7_3.jpg?t=1636044789265"
          alt="bgImg"
        />
        <img
          src="https://static.zarahome.net/8/photos4/2021/I/4/1/p/9336/060/250/9336060250_1_1_3.jpg?t=1633963340692"
          alt="bgImg"
        />
      </div>
      <div className="rightContainer">
        <div className="rightContainerInner">
          <div className="productTitle">폴라 베어 스노우볼</div>
          <div className="productPrice">49,000원</div>
          <div className="productNumber">제품번호 9336/060</div>
          <div className="productText">
            북극곰 디테일 장식용 크리스탈 글라스 스노우볼. 흔들면 안에 있는
            눈송이가 흩날림.
          </div>
          <div className="productInfoTable">
            <div className="productInfoHeader">
              <span className="productValue">높이</span>
              <span className="productValue">가로 폭</span>
              <span className="productValue">깊이</span>
            </div>
            <div className="productInfoCons">
              <span className="productInfoValue">14cm</span>
              <span className="productInfoValue">10cm</span>
              <span className="productInfoValue">10cm</span>
              <span className="productInfoLikes">
                <div className="likes">좋아염</div>
                <div className="amount">
                  <button onClick={decreaseAmount}>-</button>
                  <div className="amountNumber">{number}</div>
                  <button onClick={increaseAmount}>+</button>
                </div>
              </span>
            </div>
            <div className="productInfoCons">
              <span className="productInfoValue">14cm</span>
              <span className="productInfoValue">10cm</span>
              <span className="productInfoValue">10cm</span>
              <span className="productInfoLikes">
                <div className="likes">좋아염</div>
                <div className="amount">
                  <button onClick={decreaseAmount}>-</button>
                  <div className="amountNumber">{number}</div>
                  <button onClick={increaseAmount}>+</button>
                </div>
              </span>
            </div>
          </div>
          {isModalOpen && (
            <DetailModal openModal={openModal} className="modal" />
          )}
          <div className="productDetailInfo">
            <div className="productDetailContents" onClick={openModal}>
              제품 상세정보
            </div>
            <div className="productDetailContents" onClick={openModal}>
              배송 및 반품
            </div>
          </div>
          <div className="productRelatedContainer">
            <div className="productRelatedHeader">
              <div className="productRelatedTxt">룩 완성하기</div>
              <ul className="productRelatedArrow">
                <button>왼</button>
                <button>오</button>
              </ul>
            </div>
            <ul className="productRelatedCons">
              <li className="productRelatedImg"></li>
              <li className="productRelatedImg"></li>
              <li className="productRelatedImg"></li>
              <li className="productRelatedImg"></li>
              <li className="productRelatedImg"></li>
            </ul>
          </div>
        </div>
        <div className="relatedProducts" />
      </div>
    </div>
  );
};

export default Detail;
