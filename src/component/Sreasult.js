import React from "react";
import "./Sresult.css";
const Sreasult = (props) => {
  const img = `https://source.unsplash.com/600x400/?${props.name}`;
  return (
    <>
      <div className="div_style">
        <img className="img_style" src={img} alt="search" />
      </div>
    </>
  );
};

export default Sreasult;
