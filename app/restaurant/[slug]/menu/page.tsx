import React from "react";
import RestaurantNavBar from "../components/RestaurantNavBar";
import MenuContainer from "../components/MenuContainer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchItems = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      Items: true,
    },
  });
  if (!restaurant) {
    throw new Error();
  }
  return restaurant.Items;
};

export default async function Menu({ params }: { params: { slug: string } }) {
  const menu = await fetchItems(params.slug);
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />
        <MenuContainer menu={menu} />
      </div>
    </>
  );
}
