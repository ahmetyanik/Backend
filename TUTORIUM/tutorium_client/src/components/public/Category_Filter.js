import axios from "axios";
import React, { useEffect, useState } from "react";

const Category_Filter = () => {
  return (
    <aside className="col-md-3">
      <form>
        <div className="card">
          <article className="filter-group">
            <header className="card-header">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_2"
                aria-expanded="true"
                className=""
              >
                <i className="icon-control fa fa-chevron-down"></i>
                <h6 className="title">Markalar </h6>
              </a>
            </header>
            <div className="filter-content collapse show" id="collapse_2">
              <div className="card-body"></div>
            </div>
          </article>
          <article className="filter-group">
            <header className="card-header">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_3"
                aria-expanded="true"
                className=""
              >
                <i className="icon-control fa fa-chevron-down"></i>
                <h6 className="title">Fiyat Aralığı</h6>
              </a>
            </header>
            <div className="filter-content collapse show" id="collapse_3">
              <div className="card-body">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Min</label>
                    <input
                      className="form-control"
                      placeholder="$0"
                      type="number"
                    />
                  </div>
                  <div className="form-group text-right col-md-6">
                    <label>Max</label>
                    <input
                      className="form-control"
                      placeholder="$1,0000"
                      type="number"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-block btn-primary">
                  Uygula
                </button>
              </div>
            </div>
          </article>
        </div>
      </form>
    </aside>
  );
};

export default Category_Filter;
