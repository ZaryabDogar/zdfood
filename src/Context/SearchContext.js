import React, { createContext, useState, useContext } from 'react';

// Create the context
const SearchContext = createContext();

// Custom hook to use the SearchContext
export const useSearch = () => useContext(SearchContext);

// SearchProvider component to provide the search context
export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    );
};
