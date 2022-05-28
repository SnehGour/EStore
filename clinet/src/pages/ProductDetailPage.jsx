import { useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'

const ProductDetailPage = () => {
    const { id } = useParams()

    const data = products.filter((item) => item.id == id)
    console.log("from filter method", data)
    const [quantity, setQuantity] = useState(1)

    if (data.length === 0)
        return <h2 className='ml-5'>Product Not found!!!</h2>
    else {
        return (
            <div className="container">
                <div className='row'>
                    <div className="col m-5">
                        <img src={data[0].image} style={{ width: '30rem' }} />
                    </div>
                    <div className="col m-5">
                        <h2>{data[0].name}</h2>
                        <hr />
                        <h4>{data[0].price}₹</h4>
                        <hr />
                        <h4>{data[0].desc}</h4>
                        <hr />
                        <div className="row">
                            <div className="col">
                                <button className='btn btn-outline-primary w-100'>Add to cart</button>
                            </div>
                            <div className="col">
                                <input type="number" name="quantity" id="quantity" min='1' value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProductDetailPage