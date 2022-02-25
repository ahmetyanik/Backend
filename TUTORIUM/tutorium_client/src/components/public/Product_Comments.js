import React, { useState, useEffect } from "react";
import Product_Comment from "./Product_Comment";

const Product_Comments = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <header className="section-heading">
            <h3>Ürün Yorumları </h3>
            <div className="rating-wrap">
              <ul className="rating-stars stars-lg">
                <li
                  className="stars-active"
                >
                  <img src="../images/icons/stars-active.svg" alt="" />
                </li>
                <li>
                  <img src="../images/icons/starts-disable.svg" alt="" />
                </li>
              </ul>
              <strong className="label-rating text-lg">
                <span className="text-muted">  yorum</span>
              </strong>
            </div>
          </header>

          <Product_Comment/>
          <Product_Comment/>
          <Product_Comment/>
          <Product_Comment/>

      
        </div>
      </div>
    </div>
  );
};

export default Product_Comments;
