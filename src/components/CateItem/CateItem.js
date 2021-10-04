import React from 'react';
import img from '../../utilites/icon.png';
import './CateItem.css'

const CateItem = () => {
  return (
    <div className="p-3 border-1 ctg-item">
      <div className="ctg-img">
        <img width="100px" src={img} alt="" />
      </div>
      <h5 className='fst-italic'>Development</h5>
      <p>
        <i className="fas fa-video pm-color me-2"></i> 22 Lectures
      </p>
    </div>
  );
};

export default CateItem;