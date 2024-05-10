import React from 'react'
import { useContext, useEffect } from 'react'
import { CartContext } from '../context/CardContext'
import { getCart } from '../api/cart'

const Cart = () => {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext)


  useEffect(() => {
    console.log('cart items', cart)
    if (cart.length == 0) {
      getCart().then(data => {
        addToCart(data)
        console.log('addtocart', cart)
      })
    }
  }, [cart]);


  // Handle Add

  const handleAdd = (productId) => {
    increaseQuantity(productId)
  }

  // Handle Remove

  const handleRemove = (productId) => {
    decreaseQuantity(productId)
  }


  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Product Image</th>
            <th scope='col'>Product Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Total</th>
            <th scope='col'>Add/Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td><img src={item.productImage} alt={item.productName} style={{ width: '50px' }} /></td>
              <td>{item.productName}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
              <td>
                <button className='btn btn-primary' onClick={() => handleAdd(item.id)}><i class="bi bi-plus"></i></button>
                <button className='btn btn-danger' onClick={() => handleRemove(item.id)}><i class="bi bi-dash"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Cart