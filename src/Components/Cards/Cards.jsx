import React from "react";


function Cards({ allProductsData }) {
  return (
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
  );
}

export default Cards;
