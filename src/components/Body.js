import React, { useEffect, useState, lazy, useContext } from "react";
import RestoCard, { withPromotedLabel } from "./RestoCard";
import { resObj } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();
  const { loggedInUser, setUserName } = useContext(UserContext);
  const RestaurantCardPromoted = withPromotedLabel(RestoCard);
  //console.log(listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9083215&lng=77.6050777&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection!{" "}
      </h1>
    );

  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className=" px-3 py-1 rounded-lg bg-green-100 m-5"
            onClick={() => {
              //Filter the restaurant cards and updates the UI
              //searchText

              const filteredListOfRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredListOfRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-3 py-1  rounded-lg bg-green-100 "
            onClick={() => {
              console.log("Button Clicked");
              const filterResList = listOfRestaurants.filter(
                (res) => res.info.avgRating < 4
              );
              setListOfRestaurants(filterResList);
              //console.log(filterResList);
            }}
          >
            Top Rated Restaurant
          </button>
          <label>User Name:</label>
          <input
            className="border border-black m-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className=" flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resdata={restaurant?.info} />
            ) : (
              <RestoCard resdata={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
