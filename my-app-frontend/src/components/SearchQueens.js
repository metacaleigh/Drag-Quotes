import React from 'react';

function SearchQueens({ search, setSearch }) {
    return(
        <div id="search-bar">
            <input id="search-input" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search queens..." />
        </div>
    )
}

export default SearchQueens;