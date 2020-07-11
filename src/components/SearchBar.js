import React, { useState } from "react";

const SearchBar = ({ onSearchInput }) => {
  const [term, setTerm] = useState("");

  const onSearch = (event) => {
    let val = event.target.value;
    setTerm(val);
    onSearchInput(term);
  };

  return (
    <div className="search-bar">
      <input onChange={onSearch} />
    </div>
  );
};

export default SearchBar;
