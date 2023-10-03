import React, { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {}, [buttonName]);

  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);
  return (
    <div className="flex shadow-lg justify-between  bg-pink-100">
      <div className="">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className=" flex items-center">
        <ul className="flex px-4 py-4">
          <li> Online Status : {onlineStatus ? "☑️" : "🅾️"}</li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3 font-semibold text-lg">
            <Link to="/cart">Cart- ({cartItems.length}) items</Link>
          </li>
          <button
            onClick={() =>
              buttonName == "Login"
                ? setButtonName("Logout")
                : setButtonName("Login")
            }
          >
            {buttonName}
          </button>
          <li className="px-3 font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
