import React from "react";
import "./Product.css";
import { useState } from "react";
import axios from "axios";

function Products() {
  const [allProductsData, setAllProductsData] = useState([]);

  const fetchData = (category) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        setAllProductsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchalldata = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setAllProductsData(res.data);
    }).catch((err)=>{
      alert('something went wrong')
      console.log(err);
    });
  };
  return (
    <div className="product-main-container">
      <div className="product-sidebar-container">
        <div className="product-sidebar-buttons-container">
          <button onClick={fetchalldata}>All</button>
          <button onClick={() => fetchData("electronics")}>Electronic</button>
          <button onClick={() => fetchData("jewelery")}>Jewelery</button>
          <button onClick={() => fetchData("men's clothing")}>
            Men's Clothing
          </button>
          <button onClick={() => fetchData("women's clothing")}>
            Women's Clothing
          </button>
        </div>
      </div>

      {allProductsData.length > 0 ? (
        <div className="product-data-container">
          {allProductsData.map((prod) => {
            return (
              <div className="product-card-container">
                <div className="product-card-image-container">
                  <img src={prod.image} alt="jewelery" />
                </div>
                <div className="product-card-title-container">
                  <h6>{prod.title}</h6>
                </div>
                <div className="product-card-price-container">
                  <h4>$ {prod.price}</h4>
                </div>
                <div className="product-card-button-container">
                  <button>Shop Now</button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>Which Data You Want , Select Category</h2>
      )}
    </div>
  );
}

export default Products;
