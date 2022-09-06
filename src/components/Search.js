import React from 'react';

const Search = () => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label>Search</label>
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="Search Items"
      />
    </form>
  );
};
export default Search;
