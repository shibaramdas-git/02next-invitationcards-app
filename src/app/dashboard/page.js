"use client";

import Cardfordashboard from "@/components/Cardfordashboard";
import React from "react";
import { IoMdSearch } from "react-icons/io";

const cards = [
  {
    id: "1",
    title: "Card 1 title",
    content:
      "Card description , greetings comes here, description , greetings comes heredescription , greetings comes heredescription , greetings comes heredescription",
    category: "free",
    date: "28/06/24",
  },
  {
    id: "2",
    title: "Card 2 title",
    content:
      "Card description , greetings comes here, description , greetings comes heredescription , greetings comes heredescription , greetings comes heredescription",
    category: "colorful",
    bgcolor: "gray",
    date: "20/06/24",
  },
  {
    id: "3",
    title: "Card 3 title",
    content:
      "Card description , greetings comes here, description , greetings comes heredescription , greetings comes heredescription , greetings comes heredescription",
    category: "colorful",
    bgcolor: "red",
    date: "20/06/24",
  },
  {
    id: "4",
    title: "Card 4 title",
    content:
      "Card description , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , greetings comes heredescription , greetings comes heredescription , greetings comes heredescription",
    category: "colorful",
    bgcolor: "green",
    date: "20/06/24",
  },
  {
    id: "5",
    title: "Card 5 title",
    content:
      "Card description , greetings comes here, description cription , greetings comes heredescription",
    category: "colorful",
    bgcolor: "yellow",
    date: "20/06/24",
  },
  {
    id: "6",
    title: "Card 6 title",
    content:
      "Card description , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , greetings comes heredescription , greetings comes heredescription , greetings comes heredescription",
    category: "birthday-template",
    bgimage: "birthday_temp1",
    date: "20/06/24",
  },
  {
    id: "7",
    title: "Card 7 title",
    content:
      "Card description , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , greetings comes heredescription , greetings comes heredescription , greetings comes heredescription",
    category: "greetings-template",
    bgimage: "greeting_temp1",
    date: "21/06/24",
  },
  {
    id: "8",
    title: "Card 8 title",
    content:
      "Card description , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , greetings comes heredescription , greetings comes heredescription , greetings comes heredescription",
    category: "wedding-template",
    bgimage: "wedding_temp1",
    date: "15/06/24",
  },
  {
    id: "9",
    title: "Card 9 title",
    content:
      "Card description , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , greetings comes heredescription , greetings comes heredescription , greetings comes heredescription",
    category: "colorful",
    bgcolor: "blue",
    date: "18/06/24",
  },
  {
    id: "8",
    title: "Card 8 title",
    content:
      "Card description , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , greetings comes heredescription , greetings comes heredescription , greetings comes heredescription",
    category: "wedding-template",
    bgimage: "wedding_temp2",
    date: "15/06/24",
  },
  {
    id: "8",
    title: "Card 8 title",
    content:
      "Card description , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , greetings comes heredescription , greetings comes heredescription , greetings comes heredescription",
    category: "wedding-template",
    bgimage: "wedding_temp3",
    date: "15/06/24",
  },
  {
    id: "8",
    title: "Card 8 title",
    content:
      "Card description , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , greetings comes heredescription , greetings comes heredescription , greetings comes heredescription",
    category: "wedding-template",
    bgimage: "greeting_temp2",
    date: "15/06/24",
  },
  {
    id: "8",
    title: "Card 8 title",
    content:
      "Card description , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , greetings comes heredescription , greetings comes heredescription , greetings comes heredescription",
    category: "wedding-template",
    bgimage: "greeting_temp3",
    date: "15/06/24",
  },
  {
    id: "8",
    title: "Card 8 title",
    content:
      "Card description , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , greetings comes heredescription , greetings comes heredescription , greetings comes heredescription",
    category: "wedding-template",
    bgimage: "birthday_temp2",
    date: "15/06/24",
  },
  {
    id: "8",
    title: "Card 8 title",
    content:
      "Card description , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , , greetings comes here, description , greetings comes heredescription , greetings comes heredescription , greetings comes heredescription",
    category: "wedding-template",
    bgimage: "birthday_temp3",
    date: "15/06/24",
  },
];
export default function page() {
  return (
    <div className="p-4 md:p-8 max-w-[1440px] mx-auto border border-black">
      <h1>- Dashboard page -</h1>
      <div className="w-full h-8 border-[0.1px] border-gray-300 my-6 mx-4 rounded-md p-5 bg-cyan-100 flex justify-start items-center">
        <div>
          Filter by
          <select name="filter" id="filter">
            <option id="0" value=""></option>
            <option id="1" value="date">
              Date
            </option>
            <option id="2" value="ascending">
              A to Z
            </option>
            <option id="3" value="descending">
              Z to A
            </option>
          </select>
        </div>
        <input
          type="search"
          placeholder="Search term..."
          className="bg-red-200 border border-black block h-10 bg-transparent outline-nine w-4/5"
        />
        <IoMdSearch className="" />
      </div>
      <section>
        <h2>Your cards collection</h2>
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6">
          {cards.map((card) => (
            <Cardfordashboard key={card.id} cardData={card} />
          ))}
          <Cardfordashboard create={true} />
        </div>
      </section>
    </div>
  );
}
