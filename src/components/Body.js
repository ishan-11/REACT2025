import RestaurantCard from "./Restaurant";
import resData from "../utils/res.json"; // my mock data
import { useState } from "react";

const Body = () => {
console.log("Restaurant Data:", JSON.stringify(resData.restaurants)); // Debugging line to check data structure
const [restaurants, setRestaurants] = useState(resData.restaurants);

    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filteredData = resData.restaurants.filter(
                    (restaurant) => restaurant.info.avgRating > 4.3
                    );
                console.log("Filtered Data:", filteredData);
                // Here you would typically set the filtered data to state to re-render the component
                setRestaurants(filteredData);

            }}>Top Rated Restaurant</button>
        </div>
        {/* <div className="search">
          <input type="text" placeholder="Search for restaurants" />
        </div> */}
      
        <div className="res-list">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              name={restaurant.info.name}
              cuisines={restaurant.info.cuisines}
              rating={restaurant.info.avgRating}
              imageId={restaurant.info.cloudinaryImageId}
              areaName={restaurant.info.areaName}
            />
          ))}
        </div>
      </div>
    );
  };


export default Body;
