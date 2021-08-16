import React from 'react'
function Search({ searchQuery, setSearchQuery }) {
    return(
        <form action="/" className="links">
        <label htmlFor="header-search"></label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search funds"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
    )
}
export default Search;