import { PRICE } from "@prisma/client";
import React from "react";

export default function Price({ price }: { price: PRICE }) {
  const renderPrice = () => {
    if (price === PRICE.CHEAP) {
      return (
        <>
          <span className="font-semibold">$$</span>
          <span className="text-gray-400">$$</span>
        </>
      );
    } else if (price === PRICE.REGULAR) {
      return (
        <>
          <span className="font-semibold">$$$</span>
          <span className="text-gray-400">$</span>
        </>
      );
    } else {
      return (
        <>
          <span className="font-semibold">$$$$</span>
        </>
      );
    }
  };
  return <p className="flex mr-3">{renderPrice()}</p>;
}
