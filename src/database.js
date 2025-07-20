// database.js
import axios from 'axios';

// This function is crucial for CartPage to fetch individual product details
export const getProduct = (id) => {
  return axios.get(`https://dummyjson.com/products/${id}`);
};