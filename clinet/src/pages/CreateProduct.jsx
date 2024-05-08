import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { createProduct } from '../api/products'; // Assuming you have a createProduct function in your API
import Sidebar from '../component/Sidebar';

const CreateProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        price: ''
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(product).then(() => {
            // Clear the form
            setProduct({
                name: '',
                price: ''
            });
        });
    };

    return (

        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9 p-3">

                <h2 className='p-3 text-center'>Create Product</h2>
                <hr />
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='m-3' controlId="productName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" name="name" value={product.name} onChange={handleChange} placeholder="Enter product name" />
                    </Form.Group>
                    {/* Product Description as RTF*/}

                    <Form.Group className='m-3' controlId="productDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="description" value={product.description} onChange={handleChange} placeholder="Enter product description" />
                    </Form.Group>

                    {/* Product Image */}

                    <Form.Group className='m-3' controlId="productImage">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" name="image" value={product.image} onChange={handleChange} placeholder="Enter product image" />
                    </Form.Group>


                    <Form.Group className='m-3' controlId="productType">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" name="type" value={product.type} onChange={handleChange} placeholder="Enter product Type" />
                    </Form.Group>

                    <Form.Group className='m-3' controlId="productBrand">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" name="brand" value={product.name} onChange={handleChange} placeholder="Eg. Hp, Dell etc." />
                    </Form.Group>


                    <Form.Group className='m-3' controlId="productPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" name="price" value={product.price} onChange={handleChange} placeholder="Enter product price" />
                    </Form.Group>

                    <Button className='w-100' variant="primary" type="submit">
                        Create Product
                    </Button>
                </Form>
            </div>
        </div>

    );
};

export default CreateProduct;