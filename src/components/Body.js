import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockList";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  //data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants
  try {
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      const list = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=26.95250&lng=75.71050"
      );
      const json = await list.json();
      // const json = await list.text();

      console.log(json);

      // setListOfRestaurants(
      //   json.data.success.cards[1].gridWidget.gridElements.infoWithStyle
      //     .restaurants
      // ); //
    };
  } catch (err) {
    console.log("Hey there is an error" + err);
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
