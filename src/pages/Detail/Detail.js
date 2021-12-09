import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DetailModal from '../../components/DetailModal/DetailModal';
import ProductInfoTable from '../../components/ProductInfoTable/ProductInfoTable';
import ProductRelatedItmes from '../../components/ProductRelatedItems/ProductRelatedItems';
import Button from '../../components/Button/Button';
import DetailContent from './DetailContent';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { API } from '../../config';

import './Detail.scss';

const Detail = () => {
  const [detailContents, setDetailContents] = useState({});
  const [productAmount, setProductAmount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlideWrap, setCurrentSlideWrap] = useState(0);
  const dimmerRef = useRef();
  const slideWrapRef = useRef();

  const params = useParams();

  const TOTAL_SLIDES_WRAP = detailContents.related_products?.length;

  const handleAddItemToCart = () => {
    fetch(`${API.USER}/cart`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        product_id: detailContents.id,
        quantity: productAmount,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE === 'SUCCESS') {
          alert('장바구니에 담겼습니다.');
          window.location.reload();
        } else if (result.MESSAGE === 'ITEM_ALREADY_EXIST')
          alert('이미 장바구니에 있는 상품입니다.');
        else if (result.ERROR === 'INVALID_TOKEN')
          alert('로그인 후 장바구니에 담아주세요.');
      });
  };

  useEffect(() => {
    const productId = params.id;
    fetch(`${API.PRODUCT}/detail/${productId}`)
      .then(response => response.json())
      .then(data => setDetailContents(data.result));
  }, [params]);

  const increaseAmount = () => {
    setProductAmount(productAmount => productAmount + 1);
  };

  const decreaseAmount = () => {
    if (productAmount === 1) return;
    setProductAmount(productAmount => productAmount - 1);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (isModalOpen === true) return setIsModalOpen(false);
  };

  const handlePrevSlideWrap = () => {
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
    slideWrapRef.current.style.transition = 'all 0.5s ease-in-out';
    slideWrapRef.current.style.transform = `translateX(-${
      currentSlideWrap * 2
    }00px)`;
  }, [currentSlideWrap]);

  const {
    images,
    information,
    material_cautions,
    material_names,
    name,
    price,
    product_options,
    related_products,
  } = detailContents;

  return (
    <div className="detail" onClick={closeModal}>
      {isModalOpen && <div className="dimmer" ref={dimmerRef} />}
      <DetailContent images={images} />
      <div className="rightContainer">
        <div className="rightContainerInner">
          <div className="productTitle">{name}</div>
          <div className="productPrice">
            {Number(price?.split('.')[0]).toLocaleString()}원
          </div>
          <div className="productText">{information}</div>
          <ProductInfoTable
            productOptions={product_options}
            increaseAmount={increaseAmount}
            decreaseAmount={decreaseAmount}
            productAmount={productAmount}
          />
          {isModalOpen && (
            <DetailModal
              productMaterialCaution={material_cautions}
              productMaterialName={material_names}
              openModal={openModal}
              className="modal"
            />
          )}
          <div className="productDetailInfo">
            <Button
              handleClick={handleAddItemToCart}
              format="bigger"
              type="button"
              title={`장바구니에 담기 (${Number(
                productAmount * price?.split('.')[0]
              ).toLocaleString()} 원)`}
            />
            {isModalOpen && <div className="dimmer" ref={dimmerRef} />}
            <div className="productDetailContents" onClick={openModal}>
              제품 상세정보
            </div>
          </div>
          <div className="productRelatedItems">
            <div className="productRelatedHeader">
              <div className="productRelatedTxt">룩 완성하기</div>
              <div className="productRelatedArrow">
                <button onClick={handlePrevSlideWrap}>
                  <BsChevronLeft />
                </button>
                <button onClick={handleNextSlideWrap}>
                  <BsChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="slideWrapper">
            <div className="slideConWrap" ref={slideWrapRef}>
              <ProductRelatedItmes relatedProducts={related_products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
