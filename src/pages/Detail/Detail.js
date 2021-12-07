import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailModal from '../../components/DetailModal/DetailModal';
import ProductInfoTable from '../../components/ProductInfoTable/ProductInfoTable';
import ProductRelatedItmes from '../../components/ProductRelatedItems/ProductRelatedItems';
import Button from '../../components/Button/Button';
import DetailContent from './DetailContent';
import './Detail.scss';

const Detail = () => {
  const [detailContents, setDetailContents] = useState([]);
  const [productAmount, setProductAmount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlideWrap, setCurrentSlideWrap] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [likes, setLikes] = useState();
  const dimmerRef = useRef();
  const slideRef = useRef();
  const slideWrapRef = useRef();
  const params = useParams();

  const TOTAL_SLIDES = 1;
  const TOTAL_SLIDES_WRAP = 2;
  const PRODUCT_INFO_TABLE = detailContents.product_option?.[0].size.split(',');
  const PRODUCT_RELATED_IMG = detailContents.theme_products;
  const PRODUCT_MATERIAL_CAUTION = detailContents.material_caution;
  const PRODUCT_MATERIAL_NAME = detailContents.material_name;

  const clickOrder = () => {
    // fetch('/data/mock.json')
    //   .then(response => response.json())
    //   .then(result => setDetailContents(result.result[0]));

    fetch('/data/mock.json', {
      method: 'POST',
      body: JSON.stringify({
        price: detailContents.price?.split('.')[0],
        number: productAmount,
        //producTid, price, 갯수, 사이즈, 컬러
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

  useEffect(() => {
    fetch('/data/mock.json')
      .then(response => response.json())
      .then(result => setDetailContents(result.result[0]));
  }, []);

  const increaseAmount = () => {
    setProductAmount(productAmount => productAmount + 1);
  };

  const decreaseAmount = () => {
    if (productAmount === 1) return;
    setProductAmount(productAmount => productAmount - 1);
  };

  const handlePrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (isModalOpen === true) return setIsModalOpen(false);
  };

  const prevSlideWrap = () => {
    if (currentSlideWrap === 0) {
      setCurrentSlideWrap(TOTAL_SLIDES_WRAP);
    } else {
      setCurrentSlideWrap(currentSlideWrap - 1);
    }
  };

  const handleNextSlideWrap = () => {
    if (currentSlideWrap >= TOTAL_SLIDES_WRAP) {
      setCurrentSlideWrap(0);
    } else {
      setCurrentSlideWrap(currentSlideWrap + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 2}00px)`;
  }, [currentSlide]);

  useEffect(() => {
    slideWrapRef.current.style.transition = 'all 0.5s ease-in-out';
    slideWrapRef.current.style.transform = `translateX(-${
      currentSlideWrap * 2
    }00px)`;
  }, [currentSlideWrap]);

  return (
    <div className="detail" onClick={closeModal}>
      {/* {isModalOpen && <div className="dimmer" ref={dimmerRef} />} */}
      <DetailContent detailContents={detailContents} />
      <div className="rightContainer">
        <div className="rightContainerInner">
          <div className="productTitle">{detailContents.name}</div>
          <div className="productPrice">
            {Number(detailContents.price?.split('.')[0]).toLocaleString()}원
          </div>
          <div className="productText">{detailContents.information}</div>
          <ProductInfoTable
            detailContents={PRODUCT_INFO_TABLE}
            increaseAmount={increaseAmount}
            decreaseAmount={decreaseAmount}
            productAmount={productAmount}
            // likesClick={likesClick}
          />
          {isModalOpen && (
            <DetailModal
              productMaterialCaution={PRODUCT_MATERIAL_CAUTION}
              productMaterialName={PRODUCT_MATERIAL_NAME}
              openModal={openModal}
              className="modal"
            />
          )}
          <div className="productDetailInfo">
            {/* <div className="productDetailContents" onClick={openModal}>
              배송 및 반품
            </div> */}
            <Button
              handleClick={clickOrder}
              format="bigger"
              type="button"
              title={`장바구니에 담기 (${Number(
                productAmount * detailContents.price?.split('.')[0]
              ).toLocaleString()} 원)`}
            />
            {isModalOpen && <div className="dimmer" ref={dimmerRef} />}
            <div className="productDetailContents" onClick={openModal}>
              제품 상세정보
            </div>
          </div>
          <ProductRelatedItmes
            detailContents={PRODUCT_RELATED_IMG}
            slideWrapRef={slideWrapRef}
            handleNextSlide={handleNextSlide}
            slideRef={slideRef}
            prevSlideWrap={prevSlideWrap}
            handleNextSlide={handleNextSlide}
            handleNextSlideWrap={handleNextSlideWrap}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
