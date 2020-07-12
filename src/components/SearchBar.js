import React, { useState } from "react";

const SearchBar = ({ onSearchInput }) => {
  const [term, setTerm] = useState("");

  const onSearch = (event) => {
    const val = event.target.value;
    setTerm(val);
    onSearchInput(term);
  };

  return (
    <div className="search-bar">
      <input onChange={onSearch} placeholder={"Type To Search"} />
    </div>
  );
};

export default SearchBar;
