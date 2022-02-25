import React from "react";

const Product_Card = (props) => {
  return (
    <div className="col-md-3">
      <a href="#" className="card card-product-grid">
        <div className="img-wrap">
          <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/13.jpg" />
        </div>
        <div className="info-wrap text-center ">
          <p className="title text-truncate"></p>
          <ul className="rating-stars">
            <li
              style={{ width: `${props.puan * 20}%` }}
              className="stars-active"
            >
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </li>
            <li>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </li>
          </ul>
          <small className="text-muted"></small>
          <div className="price-wrap mt-2 text-center">
            <span className="price">₺400</span>
            <del className="price-old">₺600</del>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Product_Card;
