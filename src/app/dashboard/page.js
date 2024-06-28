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
    category: "",
    date: "28/06/24",
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
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-6">
          <Cardfordashboard />
          <Cardfordashboard />
          <Cardfordashboard />
          <Cardfordashboard />
          <Cardfordashboard />
          <Cardfordashboard />
          <Cardfordashboard />
          <Cardfordashboard />
          <Cardfordashboard />
          <Cardfordashboard />
          <Cardfordashboard />
          <Cardfordashboard />
          <Cardfordashboard />
          <Cardfordashboard />
          <Cardfordashboard />
        </div>
      </section>
    </div>
  );
}
