import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getSingleProduct(id) {
    return apiClient.get(`/products/${id}`);
  },

  getProducts() {
    return apiClient.get('/products?limit=8');
  },

  getCustomerChoice() {
    return apiClient.get('/products?limit=4');
  },

  getAllProducts() {
    return apiClient.get('/products');
  },

  getMen() {
    return apiClient.get(`/products/category/men's%20clothing`);
  },

  getWomen() {
    return apiClient.get(`/products/category/women's%20clothing`);
  },

  getJewellery() {
    return apiClient.get(`/products/category/jewelery`);
  },

  getProductByLimit(lim) {
    return apiClient.get(`/products?limit=${lim}`);
  },
};
