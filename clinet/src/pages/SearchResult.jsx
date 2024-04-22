// create a searchresult page which use searchResultContext to display the search result


import React, { useContext, useState } from 'react';
import { queryProducts } from '../api/products';
import { SearchResultContext } from '../context/SearchResultContext';
import Product from '../component/ProductList';

const SearchResult = () => {
    const { searchResults, setSearchResults } = useContext(SearchResultContext);


    return (
        <>
            <div className="container">
                <h1>
                    Search Result:
                </h1>
                {searchResults.length > 0 ? searchResults.map((product) => (
                    <Product key={product.id} product={product} />
                )) : <h1>No result found</h1>
                }
            </div>
        </>
    )
}

export default SearchResult;