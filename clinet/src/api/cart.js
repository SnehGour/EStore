// create cart crud apis which use card context to manage cart state

// Path: clinet/src/api/cart.js
import axios from 'axios';
const BASE_URL = 'https://localhost:5000/api/Cart';

export const getCart = async () => {
    try {
        const res = await axios.get(BASE_URL);
        console.log('cart',res);
        return res.data;
    } catch (error) {
        console.error(error);
    }
    }

export const addToCart = async (product) => {
    try {
        console.log('cart', product)
        const res = await axios.post(BASE_URL,product.id, product.quantityInStock);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteFromCart = async (id) => {
    try {
        const res = await axios.delete(`${BASE_URL}/${id}`);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export const updateCart = async (id, product) => {
    try {
        const res = await axios.put(`${BASE_URL}/${id}`, product);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}


