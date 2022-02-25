import axios from "axios";
import React, { useEffect, useState } from "react";
import Product_Card from "./Product_Card";

const HomePage_Popular = () => {

  const [urunler,setUrunler] = useState([]);


  function urunleriAl(){

    axios.get("http://localhost:5000/api/populerurunler").then(function(gelenVeri){
      console.log(gelenVeri.data);
      setUrunler(gelenVeri.data);
    });

  }

  useEffect(urunleriAl,[]);


  return (
    <section className="section-content">
      <div className="container">
        <header className="section-heading">
          <h3 className="section-title">Populer Ürünler</h3>
        </header>

        <div className="row">

        {
          urunler.map(()=>{

            return(
                <Product_Card/>
            )
          })
        }
        </div>
      </div>
    </section>
  );
};

export default HomePage_Popular;
