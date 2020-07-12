import React, { useState } from "react";

import youtubeicon from "../youtube.svg";

const SearchBar = ({ onSearchInput }) => {
  const [term, setTerm] = useState("");

  const onSearch = (event) => {
    const val = event.target.value;
    setTerm(val);
    onSearchInput(term);
  };

  return (
    <div className="search-bar">
      <div className="image-container">
        <img src={youtubeicon} alt="youtube-icon" />
      </div>
      <div className="input-container">
        <input onChange={onSearch} placeholder={"Type To Search"} />
      </div>
    </div>
  );
};

export default SearchBar;
