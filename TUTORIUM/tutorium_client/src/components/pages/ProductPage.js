import React from "react";
import Footer from "../public/Footer";
import Header from "../public/Header";
import Product_Comments from "../public/Product_Comments.js";
import Product_Detail from "../public/Product_Detail";
import Product_Info from "../public/Product_Info";
import Product_Similar from "../public/Product_Similar";


const ProductPage = () => {
  return (
    <React.StrictMode>
      <Header />
      <Product_Info/>
      <Product_Detail/>
      <Product_Similar/>
      <Product_Comments/>
      <Footer />
    </React.StrictMode>
  );
};

export default ProductPage;
