import React, { useEffect, useState } from 'react';
import ProductList from '../component/ProductList';
import { getProducts } from '../api/products';
const Catelog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      console.log('products', products)
      setProducts(products);
    }
    ).catch((error) => {
      console.error('Error fetching products: ', error);
    })
      ;

  }, []);


  return (
    <div className='container'>
      <div className="row">
        {products.map(product => (
          <div className="col-3" key={product.id}>
            <ProductList product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catelog;