import "./App.css";
import React from "react";
import food from "../src/food.jpg";
import Burger from "../src/Burger.webp";

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

const data = {
  name: "Burger King",
  image: {Burger},
  cusines: ["Burgers", "Americans"],
  rating: "4.3 stars",
};

const RestaurantCard = () => {
  return (
    <div className="card">
      <img alt="logo2" src={Burger} />
      <h2> {data.name} </h2>
      <h3> {data.cusines.join(",")} </h3>
      <h4> {data.rating} </h4>
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
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

export default App;
