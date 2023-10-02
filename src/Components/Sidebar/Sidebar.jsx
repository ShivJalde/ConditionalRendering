import React from "react";

import { fetchData } from "../../Services/Axios/FetchData";
import { fetchallproductsdata } from "../../Services/Axios/fetchallproductsdata";

function Sidebar({ fetchalldata, setAllProductData }) {
  return (
    <div className="product-sidebar-container">
      <div className="product-sidebar-buttons-container">
        <button
          onClick={() => {
            fetchallproductsdata(setAllProductData);
          }}
        >
          All
        </button>
        <button onClick={() => fetchData("electronics", setAllProductData)}>
          Electronic
        </button>
        <button onClick={() => fetchData("jewelery", setAllProductData)}>
          Jewelery
        </button>
        <button onClick={() => fetchData("men's clothing", setAllProductData)}>
          Men's Clothing
        </button>
        <button
          onClick={() => fetchData("women's clothing", setAllProductData)}
        >
          Women's Clothing
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
