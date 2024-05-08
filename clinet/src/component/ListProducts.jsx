import React, { useEffect, useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import { getProducts } from '../api/products'

const ListProducts = () => {
    const [product, setProduct] = useState([]);


    useEffect(() => {
        getProducts().then((response) => {
            console.log(response, 'response')
            setProduct(response);
        });
    }, []);


    // Generate the product rows
    const productRows = product.map(item => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
                <a href=""><i className="bi bi-pencil"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href=""><i class="bi bi-trash3"></i></a>&nbsp;&nbsp;&nbsp;
            </td>
        </tr>
    ));


    console.log('productRows', product);
    return (
        <>
            {/* if product is empty display no product found in if and else*/}

            {product.length === 0 ? <h1>No Product Found</h1> :
                (<Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productRows}
                    </tbody>
                </Table>)}
        </>
    );
};

export default ListProducts;