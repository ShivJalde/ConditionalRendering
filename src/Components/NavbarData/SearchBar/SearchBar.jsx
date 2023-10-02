import "./SearchBar.css";

import React from "react";

function SearchBar() {
  return (
    <div className="navbar-searchbox">
      <input type="search" name="search" id="search" placeholder="Search Amazon.in"/>
    </div>
  );
}

export default SearchBar;
