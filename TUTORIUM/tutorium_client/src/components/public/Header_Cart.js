import React from "react";

const Header_Cart = () => {


  return (
    <a href="/sepetim" className="widget-header pl-3 ml-3">
      <div className="icon icon-sm rounded-circle border">
        <i className="fa fa-shopping-cart"></i>
      </div>
      <span className="badge badge-pill badge-danger notify"></span>
    </a>
  );
};

export default Header_Cart;
