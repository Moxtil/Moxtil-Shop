import React from "react";

export default function UnderHomeItem(props) {
  return (
    <div>
      <img src={props.imgSrc} alt="item" />
      <p className="top-title">{props.title}</p>
      <p className="brand">{props.brand}</p>
      <p className="under-price">${props.price}</p>
      <p>
        <i className="bx bxs-star"></i>
        {props.rate}
      </p>
      <button>Buy Now </button>
    </div>
  );
}
