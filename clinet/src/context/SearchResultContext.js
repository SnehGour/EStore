// create a searchResultContext to store the search result

import React, { createContext, useState } from 'react';

export const SearchResultContext = createContext();

export const SearchResultProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);
    return (
        <SearchResultContext.Provider value={{ searchResults, setSearchResults }}>
            {children}
        </SearchResultContext.Provider>
    )
}

// Path: clinet/src/component/Header.jsx


