import axios from "axios";

export const getProducts = () => {
  return axios.get("https://product-review-wnnr.onrender.com/api/v1/reviews");
};
