import React, { useState } from "react";

const Product_Images = (props) => {

  return (
    <article className="gallery-wrap">
      <div className="img-big-wrap">
        <a href="#">
          <img src="" alt="" />
        </a>
      </div>
      <div className="thumbs-wrap">
        <span className="item-thumb">
          <img   alt="" />
        </span>
        <span className="item-thumb">
          <img   alt="" />
        </span>
        <span className="item-thumb">
          <img  alt="" />
        </span>
        <span className="item-thumb">
          <img   alt="" />
        </span>
      </div>
    </article>
  );
};

export default Product_Images;
