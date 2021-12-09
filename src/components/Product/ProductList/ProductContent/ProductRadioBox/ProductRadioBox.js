import React, { useRef, useState, useEffect } from 'react';
import Spot from './Spot/Spot';
import ProductInfo from './ProductInfo/ProductInfo';

import './ProductRadioBox.scss';

const ProductRadioBox = ({ spotdata }) => {
  const radioBoxRef = useRef();
  const [isMouseSpotEnter, setIsMouseSpotEnter] = useState(false);
  const [isMouseInfoEnter, setIsMouseInfoEnter] = useState(false);

  const handleSpotMouseEnter = e => {
    setIsMouseSpotEnter(true);
  };

  const handleSpotMouseLeave = e => {
    setIsMouseSpotEnter(false);
  };

  const handleInfoMouseEnter = e => {
    if (e.target !== e.currentTarget) return;
    setIsMouseInfoEnter(true);
  };

  const handleInfoMouseLeave = e => {
    setIsMouseInfoEnter(false);
  };

  useEffect(() => {
    radioBoxRef.current.style.top = `${spotdata.y_position}%`;
    radioBoxRef.current.style.left = `${spotdata.x_position}%`;
  }, []);

  return (
    <div className="productRadioBox" ref={radioBoxRef}>
      <Spot
        handleSpotMouseEnter={handleSpotMouseEnter}
        handleSpotMouseLeave={handleSpotMouseLeave}
      />
      <ProductInfo
        spotdata={spotdata}
        isRadioActive={isMouseSpotEnter || isMouseInfoEnter}
        handleInfoMouseEnter={handleInfoMouseEnter}
        handleInfoMouseLeave={handleInfoMouseLeave}
      />
    </div>
  );
};

export default ProductRadioBox;
