import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./Constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allrestaurants, setAllRestaurants] = useState(restaurantList);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json");
    setAllRestaurants(json?.cards?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.cards?.cards[2]?.data?.data?.cards);
  }

  function filterdata(searchText, allrestaurants) {
    return allrestaurants.filter((item) =>
      item.data.name.includes(searchText.toLowerCase())
    );
  }
  if (!allrestaurants) return null;
  return allrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterdata(searchText, allrestaurants);
            setFilteredRestaurants(data);
          }}
        >
          {" "}
          Search{" "}
        </button>
      </div>
      <div className="restro-list">
        {filteredrestaurants.map((item) => {
          return <RestaurantCard {...item.data} key={item.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
