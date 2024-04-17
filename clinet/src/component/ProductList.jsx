import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({ product }) => {
    return (
        <>
            <div className="col-md-4" key={product.id}>
              <div className="card card-custom">
                <img src={product.image} className="card-img-top card-image-custom" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.desc}</p>
                  <h3>{product.price}₹</h3>
                  <Link to={`/catelog/${product.id}`} className="btn btn-primary">
                    View
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="card" style={{ width: "18rem" }}>
                <img src={product.image} className="card-img-top" style={{ height: '18rem' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <h5 className="card-title">{product.price}₹</h5>
                    <div className="row">
                        <div className="col">
                            <Link to="#" className="btn btn-outline-primary w-100">Add to cart</Link>
                        </div>
                        <div className="col">
                            <Link to={`/catelog/${product.id}`} className="btn btn-outline-primary w-100">View</Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default ProductList