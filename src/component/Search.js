import React, { useState } from "react";
import Sreasult from "./Sreasult";
import "./Search.css";
const Search = () => {
  const [img, setImg] = useState("");
  const InputEvent = (event) => {
    const data = event.target.value;
    setImg(data);
  };
  return (
    <>
      <div className="search_style">
        
        <input
          type="text"
          value={img}
          placeholder="Search"
          onChange={InputEvent}
          className="input_style"
        />
      </div>
      {img === "" ? null : <Sreasult name={img} />}
    </>
  );
};

export default Search;
