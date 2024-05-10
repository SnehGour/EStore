import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log('context', product)
    // check the products is already in the cart, if there then only increase the quantity
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : item
        )
      );
    } else {
      setCart(product);
    }
  };

  // Increse Quantity
  const increaseQuantity = (productId) => {
    console.log('increaseQuantity',productId)
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  


  // Decrease Quantity
  const decreaseQuantity = (productId) => {
    setCart(
      cart.reduce((newCart, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            newCart.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          newCart.push(item);
        }
        return newCart;
      }, [])
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart,increaseQuantity,decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};