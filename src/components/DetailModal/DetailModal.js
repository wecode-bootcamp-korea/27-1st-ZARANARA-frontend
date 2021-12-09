import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import './DetailModal.scss';

const DetailModal = ({
  openModal,
  productMaterialCaution,
  productMaterialName,
}) => (
  <div className="detailModal">
    <div className="modalContainer">
      <div className="modalWrapper">
        <div className="wrapper">
          <button className="modalButton" onClick={openModal}>
            <AiOutlineClose className="modalCloseButton" />
          </button>
          <ul className="modalCon">
            <li className="modalConHeader">소재</li>
            <li className="modalContents">
              <span className="modalProductMaterialName">
                {productMaterialName[0]}
              </span>
              <span className="modalProductMaterialName">
                {productMaterialName[1]}
              </span>
            </li>
          </ul>
          <ul className="modalCon">
            <li className="modalConHeader">주의사항</li>
            <li className="modalContents">
              <span>{productMaterialCaution[0]}</span>
            </li>
            <li className="modalContents">
              <span>{productMaterialCaution[1]}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default DetailModal;
