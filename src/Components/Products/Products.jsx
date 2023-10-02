import React from "react";
import "./Product.css";
import { useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import Cards from "../Cards/Cards";
import NOData from "../NoData/NOData";

function Products() {
  const [allProductsData, setAllProductsData] = useState([]);

  // const fetchalldata = () => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => {
  //       setAllProductsData(res.data);
  //     })
  //     .catch((err) => {
  //       alert("something went wrong");
  //       console.log(err);
  //     });
  // };
  return (
    <div className="product-main-container">
      <Sidebar setAllProductData={setAllProductsData} fetchalldata={setAllProductsData} />
      <div></div>

      {allProductsData.length > 0 ? (
        <Cards allProductsData={allProductsData} />
      ) : (
        <NOData />
      )}
    </div>
  );
}

export default Products;
