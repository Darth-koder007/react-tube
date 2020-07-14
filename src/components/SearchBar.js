import React, { useState } from "react";

import { debounce } from "lodash";
import youtubeicon from "../youtube.svg";

const SearchBar = ({ onSearchInput = () => {} }) => {
  const [term, setTerm] = useState("");

  const onSearch = (event) => {
    const val = event.target.value;
    setTerm(val);
    const fn = debounce(() => {
      onSearchInput(term);
    }, 500);
    fn();
  };

  return (
    <div className="search-bar" data-test-id="search-bar-container">
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
