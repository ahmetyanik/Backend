import React from "react";

const Product_Comment = () => {
  return (
    <article className="box mb-3">
      <div className="icontext w-100">
        <div className="text">
          <span className="date text-muted float-md-right"></span>
          <h6 className="mb-1"></h6>
          <ul className="rating-stars">
            <li
              className="stars-active"
            >
              <img src="../images/icons/stars-active.svg" alt="" />
            </li>
            <li>
              <img src="../images/icons/starts-disable.svg" alt="" />
            </li>
          </ul>
          <span className="label-rating text-warning">
          </span>
        </div>
      </div>
      <div className="mt-3">
        <p></p>
      </div>
    </article>
  );
};

export default Product_Comment;
