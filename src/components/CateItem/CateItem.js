import React from 'react';
import img from '../../utilites/icon.png';
import './CateItem.css'

const CateItem = (props) => {
  const { icon, title, lecture } = props?.categorie;
  return (
    <div className="p-3 border-1 ctg-item">
      <div className="ctg-img">
        <i className={`${icon} fa-2x cat-icon`}></i>
      </div>
      <h5 className="fst-italic">{title}</h5>
      <p>
        <i className="fas fa-video text-white me-2"></i>
        {lecture} Lecture
      </p>
    </div>
  );
};

export default CateItem;