import React from "react";
import food from "../../src/food.jpg";

export const Title = () => {
  return (
    <div className="title">
      <img className="logo" alt="logo" src={food} />{" "}
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
