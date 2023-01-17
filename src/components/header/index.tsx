// import React from "react";
import Logo from "../logo";
import harmburger from "../../assets/images/menu.png";
import "./style.scss";
import { BsArrowUpRight } from "react-icons/bs";

const index = () => {
  return (
    <header className="header">
      <Logo />

      <nav className="navigations">
        <a href="#">Home</a>
        <a href="#">About me</a>
        <a href="#">Projects</a>
        <a href="#">
          Contact me <BsArrowUpRight fontSize="16" />
        </a>
      </nav>

      <div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default index;
