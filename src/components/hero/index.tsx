import React from "react";
import bg from "../../assets/images/fl5.jpg";
import "./style.scss";
import { TfiArrowCircleDown } from "react-icons/tfi";
const index = () => {
  return (
    <div className="hero">
      <h1>
        Trendy <br />
        fashion
      </h1>

      <TfiArrowCircleDown fontSize="60px" />
    </div>
  );
};

export default index;
