import { Link } from "react-router-dom"
import React, { useContext, useState } from 'react';
import { queryProducts } from '../api/products';
import { SearchResultContext } from '../context/SearchResultContext';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const { setSearchResults } = useContext(SearchResultContext);
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        // Call the search API
        const products = await queryProducts(searchTerm);
        setSearchResults(products);
        console.log(products); // Log the products for now

        navigate('/search');
    };
    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">EStore</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/catelog" className="nav-link text-light" style={{ textDecoration: 'none' }}>CATELOG</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-light" style={{ textDecoration: 'none' }}>ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-light" style={{ textDecoration: 'none' }}>CONTACT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link text-light" style={{ textDecoration: 'none', margin: '0 20px' }}><i class="fa-solid fa-cart-shopping"></i></Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button className="btn btn-light" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header