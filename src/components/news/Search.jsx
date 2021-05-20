import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ query, onQueryChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <input
            aria-label="query-input"
            name="query-input"
            type="text"
            required={true}
            value={query}
            onChange={onQueryChange}
        >
        </input>
        <button aria-label="query-submit">SUBMIT QUERY</button>
    </form>
);

Search.propTypes = {
    query: PropTypes.string.isRequired,
    onQueryChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Search;