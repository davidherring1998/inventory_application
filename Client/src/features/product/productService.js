import axios from "axios";

const API_URL = "/api/product/";

//get all products
const getProduct = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

// create new product
const createProduct = async (productData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, productData, config);
  return response.data;
};

//delete a product
const deleteProduct = async (productID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + productID, config);
  return response.data;
};

const productService = {
  getProduct,
  createProduct,
  deleteProduct,
};

export default productService;
