import React from "react";
import RestaurantNavBar from "../components/RestaurantNavBar";
import MenuContainer from "../components/MenuContainer";

export default function Menu() {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar />
        <MenuContainer />
      </div>
    </>
  );
}
