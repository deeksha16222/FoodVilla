import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./Constants";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState();
  function filterdata(searchText, restaurants) {
    return restaurants.filter((item) => item.data.name.includes(searchText));
  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterdata(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          {" "}
          Search{" "}
        </button>
      </div>
      <div className="restro-list">
        {restaurants.map((item) => {
          return <RestaurantCard {...item.data} key={item.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
