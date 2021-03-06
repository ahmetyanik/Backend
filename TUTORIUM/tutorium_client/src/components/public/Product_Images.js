import React, { useState } from "react";

const Product_Images = (props) => {

  const [resim,setResim] = useState("");

  function resimDegis(e){

    setResim(e.target.src)
  }

  return (
    <article className="gallery-wrap">
      <div className="img-big-wrap">
        <a href="#">
          <img src = {resim === "" ? props.resimler.bir :resim} alt="" />
        </a>
      </div>
      <div className="thumbs-wrap">
        <span className="item-thumb">
          <img onClick={resimDegis} src = {props.resimler.bir}  alt="" />
        </span>
        <span className="item-thumb">
          <img onClick={resimDegis} src = {props.resimler.iki}   alt="" />
        </span>
        <span className="item-thumb">
          <img onClick={resimDegis} src = {props.resimler.uc}  alt="" />
        </span>
        <span className="item-thumb">
          <img onClick={resimDegis} src = {props.resimler.dort}   alt="" />
        </span>
      </div>
    </article>
  );
};

export default Product_Images;
