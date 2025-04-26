import React from 'react'
import "./SearchBar.css"

function SearchBar() {
  return (
    <div className="SearchBarContainer">
      <input
        type="text"
        placeholder="Search for charities, services, or blog posts"
        className="SearchBar"
      />
      <button className="SearchButton">
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/light-e-treasure-3/search-286.png"
          alt="Search Icon"
          className="SearchIcon"
        />
      </button>
    </div>
  )
}

export default SearchBar
