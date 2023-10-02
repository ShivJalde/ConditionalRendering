import axios from "axios";

export const fetchallproductsdata = (setAllProductsData) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      setAllProductsData(res.data);
    })
    .catch((err) => {
      alert("something went wrong");
      console.log(err);
    });
};
