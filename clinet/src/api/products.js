// let implement products api here use axios to make request to the server
// set base url as localhost:5000
import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:5000';

export const getProducts = async () => {
    try {
        const response = await axios.get('/api/product');
        return response.data;
    } catch (error) {
        console.error('Error fetching products: ', error);
    }
}

export const getProductById = async (productId) => {
    try {
        const response = await axios.get(`/api/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by id: ', error);
    }
}

export const createProduct = async (product) => {
    try {
        const response = await axios.post('/api/products', product);
        return response.data;
    } catch (error) {
        console.error('Error creating product: ', error);
    }
}

export const updateProduct = async (product) => {
    try {
        const response = await axios.put(`/api/products/${product._id}`, product);
        return response.data;
    } catch (error) {
        console.error('Error updating product: ', error);
    }
}

export const queryProducts = async (query) => {
    try {
        const response = await axios.get(`/api/products/search/${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products: ', error);
    }
}

export const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`/api/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting product: ', error);
    }
}


