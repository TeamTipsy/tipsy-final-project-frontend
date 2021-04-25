import React from 'react';
import QueryFromSearch from './components/QueryFromSearch.js';
import Search from './search.js';

export function SearchResults() {
    let searchResults = <Search />
    if(search && search.length) {
        searchResults = search.map(venue => <QueryFromSearch key={venue.id} />);
    }

    return (
        <div className="list-of-results">
            {searchResults}
        </div>
    );
}