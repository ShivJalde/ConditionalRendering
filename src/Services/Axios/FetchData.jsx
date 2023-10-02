import axios from "axios";

export const fetchData = (category, setAllProductsData) => {
  axios
    .get(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => {
      setAllProductsData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
