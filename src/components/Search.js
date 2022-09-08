import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, setSearch }) => (
  <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
    <input
      type="text"
      id="search"
      role="searchbox"
      placeholder="Search Items"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </form>
);

Search.propTypes = {
  search: PropTypes.shape.isRequired,
  setSearch: PropTypes.func.isRequired,
};
export default Search;
