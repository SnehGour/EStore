import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CardContext';
import { addToCart as addToCartAPI } from '../api/cart';

const ProductList = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="col-md-4" key={product.id}>
        <div className="card card-custom">
          <img src={product.pictureUrl} className="card-img-top card-image-custom" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <h3>{product.price}₹</h3>
            <div className="d-flex justify-content-between">
              <Link to={`/catelog/${product.id}`} className="btn btn-primary">
                View
              </Link>
              <Link to="#" className="btn btn-primary" onClick={async () => {
                const newProduct = await addToCartAPI(product);
                addToCart(newProduct);
              }}>
                <i className="bi bi-cart-fill"></i> Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ProductList;