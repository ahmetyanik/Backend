import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Product_Card from "./Product_Card";

const Category_Products = () => {
  const parametreler = useParams();

  const query = new URLSearchParams(useLocation().search);

  
  
  const [urunler, setUrunler] = useState([]);
  const [urunSayisi, setUrunSayisi] = useState([]);

  console.log(urunler);
  
  const bulundugu_sayfa = parseInt(query.get("sayfa") === null ? 1 : query.get("sayfa"));
  const secim = query.get("secim") === null ? "1" : query.get("secim") ;

  
  let yaziliSecim = "Yeni ürünler";

  if(secim === "2"){
    yaziliSecim = "Cok satanlar";
  }else if(secim === "3"){
    yaziliSecim = "En düsük fiyat";
  }


  const skipSayisi = 6;

  function urunleriAl() {
    axios
      .get(
        `http://localhost:5000/api/kategori/${
          parametreler.kategori_url
        }/${query.get("sayfa")}?secim=${secim}`
      )
      .then((veri) => {
        setUrunler(veri.data);
      });
  }

console.log(bulundugu_sayfa, query.get("sayfa"));

  function urunSayisiniAl() {
    axios
      .get(
        `http://localhost:5000/api/urunsayisi/${
          parametreler.kategori_url
        }`
      )
      .then((veri) => {
        console.log(veri);
        setUrunSayisi(veri.data.toplam);
      });
  }


  function siralamaSecildi(e){


    let adres = "";

    if(e.target.value === "Yeni ürünler"){
      console.log("jjj");

       adres = `http://localhost:3000/kategori/${parametreler.kategori_url}?sayfa=${bulundugu_sayfa}&secim=1`

    }else if(e.target.value === "Cok satanlar"){

      console.log("nnn");

      adres = `http://localhost:3000/kategori/${parametreler.kategori_url}?sayfa=${bulundugu_sayfa}&secim=2`

    }else if(e.target.value === "En düsük fiyat"){

      console.log("lll");

      adres = `http://localhost:3000/kategori/${parametreler.kategori_url}?sayfa=${bulundugu_sayfa}&secim=3`

    }

    window.location.href = adres;

  }

  useEffect(urunleriAl, []);
  useEffect(urunSayisiniAl,[]);

  return (
    <main className="col-md-9">
      <header className="border-bottom mb-4 pb-3">
        <div className="form-inline">
          <span className="mr-md-auto"> {urunSayisi} tane ürün bulundu.</span>
          <select defaultValue={yaziliSecim} onChange={siralamaSecildi} className="mr-2 form-control">
            <option >Yeni ürünler</option>
            <option>Cok satanlar</option>
            <option>En düsük fiyat</option>
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

      <div className="row">
        {urunler.map((urun) => {
            return (
              <Product_Card
                key={urun._id}
                isim={urun.isim}
                yildizsayisi={urun.yildizsayisi}
                puan={urun.yildiz.puan}
                ind_fiyat={urun.ind_fiyat}
                normal_fiyat={urun.normal_fiyat}
                resim={urun.resimler.bir}
                id={urun._id}
              />
            );
        })}
      </div>

      <nav className="mt-4" aria-label="Page navigation sample">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href={`/kategori/${parametreler.kategori_url}?sayfa=${1}`}>
              İlk Sayfa
            </a>
          </li>


          <li className={`page-item ${bulundugu_sayfa === query.get("sayfa") ? "active" : ""  } `}>
          <a className="page-link" href={`/kategori/${parametreler.kategori_url}?sayfa=${Math.floor(urunSayisi / skipSayisi)-1}`}>
          {Math.floor(urunSayisi / skipSayisi)-1}
            </a>
          </li>

          <li className="page-item">
          <a className="page-link" href={`/kategori/${parametreler.kategori_url}?sayfa=${Math.floor(urunSayisi / skipSayisi)}`}>
          {Math.floor(urunSayisi / skipSayisi)}
            </a>
          </li>

          <li className="page-item">
          <a className="page-link" href={`/kategori/${parametreler.kategori_url}?sayfa=${Math.floor(urunSayisi / skipSayisi)+1}`}>
              Son Sayfa
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Category_Products;
