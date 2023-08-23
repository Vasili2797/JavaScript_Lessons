import React, { useState } from "react";
import "./SearchBar.css";

const products=[
    "tooth paste",
    "tooth brush",
    "mouth wash",
    "dental floss",
    "mouth guard",
]

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick=()=>{
    setSearchValue("");
  }

  const shouldDisplayButton=searchValue.length>0;

  console.log(shouldDisplayButton);

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <br />
      {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
      {searchValue}

      <br />
      {/* Create a number input type search box in other class */}
    </div>
  );
};

export default SearchBar;
