import "./App.css";
import React from "react";
import food from "../src/food.jpg";
import restaurantList from "./constants.js";

function App() {
  return (
    <div>
      <Applayout />
    </div>
  );
}

const Applayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const Title = () => {
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

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="foodie"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>footer</h1>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restro-list">
      {restaurantList.map((restaurant) => {
        return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

export default App;
