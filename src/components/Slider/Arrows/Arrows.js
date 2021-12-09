import React from 'react';

import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import './Arrows.scss';

const Arrows = ({ handlePrevSlide, handleNextSlide }) => {
  return (
    <div className="arrows">
      <span className="prev" onClick={handlePrevSlide}>
        <MdArrowBackIos className="leftArrow" />
      </span>
      <span className="next" onClick={handleNextSlide}>
        <MdArrowForwardIos className="rightArrow" />
      </span>
    </div>
  );
};

export default Arrows;
