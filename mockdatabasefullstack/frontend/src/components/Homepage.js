import React from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards";

function Homepage({records}) {
  return(
    <div>
    <h1 className="text-center">Homepage</h1> <Link to="/top4"><h1>Top4</h1></Link>
  <div className="App d-flex justify-content-around align-items-center flex-wrap">
    {records.map((record, index) => {
      console.log(record);

      return (
        <Cards
          key={index}
          title={record.title}
          artist={record.artist}
          year={record.year}
          image={record.image}
          price={record.price}
        />
      );
    })}
  </div>
  </div>);
}

export default Homepage;
