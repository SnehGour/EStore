import React from 'react'
import ProductList from '../component/ProductList'
import products from '../products'
const Catelog = () => {

  console.log("Catelog", products)
  return (
    <div className='container'>
      <div className="row">
        {products.map(product => (
          <div className="col-3">
            <ProductList key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catelog