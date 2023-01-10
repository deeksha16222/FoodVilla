import React from 'react'
import RestaurantCard from './RestaurantCard';
import { restaurantList } from './Constants';


const Body = () => {
    return (
      <div className="restro-list">
        {restaurantList.map((item) => {
          return <RestaurantCard {...item.data} key={item.data.id} />;
        })}
      </div>
    );
  };

  export default Body