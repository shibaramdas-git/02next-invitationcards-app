import React from "react";
import { IoMdSearch } from "react-icons/io";

export default function page() {
  return (
    <div>
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
      Dashboard page
    </div>
  );
}
