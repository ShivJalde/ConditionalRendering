import React from "react";
import "./Product.css";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Cards from "../Cards/Cards";
import NOData from "../NoData/NOData";

function Products() {
  const [allProductsData, setAllProductsData] = useState([]);

  return (
    <div className="product-main-container">
      <Sidebar
        setAllProductData={setAllProductsData}
        fetchalldata={setAllProductsData}
      />
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
