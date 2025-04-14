import React from 'react'

const MainBar = ({ search, setSearch }) => (
    <input
      type="text"
      placeholder="Search expenses..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-bar"
    />
  );
  
  export default MainBar;
