// create a home page for the ecommerce website
// add hero section also which have a backgorund image and Title and subtitle and a button
// add a container and row and col in the container
// map over the products and display the products in the card
// add a footer also

import React from 'react'
import { Link } from 'react-router-dom'
import products from '../products'
import Footer from '../component/Footer'
const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            {/* Hero section*/}
            <div
              className="hero p-5 text-white"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="hero-title text-white">Welcome to EStore</h1>
              <h6 className="hero-subtitle text-white">
                We sell the best products for your daily needs
              </h6>
              <Link to="/catelog" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {products.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card card-custom">
                <img src={item.image} className="card-img-top card-image-custom" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.desc}</p>
                  <h3>{item.price}₹</h3>
                  <Link to={`/catelog/${item.id}`} className="btn btn-primary">
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home



