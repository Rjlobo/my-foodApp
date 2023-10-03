import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestoCard = (props) => {
  const { resdata } = props;
  console.log(resdata);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resdata;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 h-full  hover:bg-gray-300 sm:bg-orange-200 w-[250px] rounded-lg bg-gray-100"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h4 className="font-bold py-2 text-lg">{name}</h4>
      <h4 className=" font-medium">{areaName}</h4>
      <h5 className="font-mono">{cuisines.join(" ")}</h5>
      <h4 className="font-bold">Average Rating: {avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h5>{deliveryTime} Minutes</h5>
      <h5 className="font-semibold">User Name: {loggedInUser}</h5>
    </div>
  );
};

// Higher Order Component
// Input- RestaurantCard -==> RestaurantCardPromoted

export const withPromotedLabel = (RestoCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestoCard {...props} />
      </div>
    );
  };
};
export default RestoCard;
