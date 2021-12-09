import React from 'react';

import { IoCloseSharp } from 'react-icons/io5';
import './FilterAside.scss';

function FilterAside({
  isFilterOn,
  handleOpenFilterAside,
  handleFilterLowerPrice,
  handleFilterTopPrice,
}) {
  return (
    <aside className={`filterAside ${isFilterOn ? 'active' : ''}`}>
      <div className="header">
        <div className="titleWrapper">
          <span className="titlename">필터</span>
          <button
            className="closeButton"
            onClick={() => handleOpenFilterAside()}
          >
            <IoCloseSharp className="closeIcon" />
          </button>
        </div>
      </div>
      <div className="buttonContainer">
        <button
          className="topPriceButton"
          onClick={() => handleFilterTopPrice()}
        >
          높은 순
        </button>
        <button
          className="lowerPriceButton"
          onClick={() => handleFilterLowerPrice()}
        >
          낮은 순
        </button>
      </div>
    </aside>
  );
}

export default FilterAside;
