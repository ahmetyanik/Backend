import React, { useEffect, useState } from "react";

const Category_Products = () => {
  return (
    <main className="col-md-9">
      <header className="border-bottom mb-4 pb-3">
        <div className="form-inline">
          <span className="mr-md-auto"> tane ürün bulundu.</span>
          <select className="mr-2 form-control">
            <option>Yeni ürünler</option>
            <option>Çok satanlar</option>
            <option>En düşük fiyat</option>
          </select>
          <div className="btn-group">
            <a
              href="#"
              className="btn btn-outline-secondary"
              data-toggle="tooltip"
              title=""
              data-original-title="List view"
            >
              <i className="fa fa-bars"></i>
            </a>
            <a
              href="#"
              className="btn  btn-outline-secondary active"
              data-toggle="tooltip"
              title=""
              data-original-title="Grid view"
            >
              <i className="fa fa-th"></i>
            </a>
          </div>
        </div>
      </header>

      <div className="row"></div>

      <nav className="mt-4" aria-label="Page navigation sample">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              İlk Sayfa
            </a>
          </li>

          <li className="page-item">
            <a className="page-link" href="#">
              Son Sayfa
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Category_Products;
