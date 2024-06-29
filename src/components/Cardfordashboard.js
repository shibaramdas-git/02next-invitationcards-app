import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { FaDownload } from "react-icons/fa6";

export default function Cardfordashboard(props) {
  const {
    //Data
    title,
    date,
    content,
    bgimage,
    bgcolor,
    id,
    cost,
    category,
    //reusable component props
    create = false,
    height,
  } = props || {};

  //dynamic bg color for the card
  const bgColorVariant = {
    gray: "bg-slate-100",
    red: "bg-rose-100",
    yellow: "bg-amber-100",
    green: "bg-green-100",
    blue: "bg-cyan-100",
  };

  //Dynamic bg image for the card
  const bgImageVariant = {
    wedding_temp1: "bg-[url('/img/wedding-temp1.jpeg')] bg-cover h-[90%]",
    wedding_temp2: "bg-[url('/img/wedding-temp2.jpeg')] bg-cover h-[90%]",
    wedding_temp3: "bg-[url('/img/wedding-temp3.jpeg')] bg-cover h-[90%]",
    birthday_temp1:
      "bg-[url('/img/birthday-temp1.jpeg')] bg-cover h-[90%] bg-bottom",
    birthday_temp2:
      "bg-[url('/img/birthday-temp2.jpeg')] bg-cover h-[90%] bg-[10%]",
    birthday_temp3: "bg-[url('/img/birthday-temp3.jpeg')] bg-cover h-[90%]",
    greeting_temp1: "bg-[url('/img/greeting-temp1.jpeg')] bg-cover h-[90%]",
    greeting_temp2: "bg-[url('/img/greeting-temp2.jpeg')] bg-cover h-[90%]",
    greeting_temp3: "bg-[url('/img/greeting-temp3.jpeg')] bg-cover h-[90%]",
  };

  // If create is true create a new card
  if (create) {
    return (
      <Link
        href={`/create`}
        className={`${
          height || "h-[480px]"
        } transform border-[0.1px] border-gray-300 shadow-md rounded-md flex flex-col items-center p-2 hover:shadow-xl hover:scale-105 duration-[0.2s] ${
          bgColorVariant[bgcolor] || " "
        }`}
      >
        <p className="font-semibold">Create a new</p>
        <div
          className={`${
            bgImageVariant[bgimage] || ""
          } text-6xl flex justify-center items-center w-full my-auto`}
        >
          +
        </div>
        <div className="font-bold flex justify-between w-full">
          <span>{cost ? `${cost} Rs` : "Free"}</span>
          <span className="font-normal">
            {bgcolor || category || "Default"}
          </span>
        </div>
      </Link>
    );
  }

  return (
    <div
      className={`${
        height || "h-[480px] sm:h-[525px]"
      } mt-5 sm:mt-0 rounded-md border-[0.1px] border-gray-300 shadow-md hover:shadow-xl p-3 flex flex-col justify-between ${
        bgColorVariant[bgcolor] || " "
      }`}
    >
      <h5 className="font-medium">{title || "Title"}</h5>
      <div
        className={`${
          bgImageVariant[bgimage] || ""
        } flex items-center justify-center text-center`}
      >
        {bgimage ? (
          <p className="w-4/5 mx-auto">{content.slice(0, 120) || "Content"}</p>
        ) : (
          <p>{content ? content.slice(0, 100) : "Content"}</p>
        )}
      </div>
      <div className="flex justify-between items-center">
        <p>{date || "Date"}</p>
        <div>
          <Link
            href={`/create/${id}`}
            className="flex gap-2 text-xl opacity-90"
          >
            <FaEdit />
            <LuShare2 />
            <FaDownload />
          </Link>
        </div>
      </div>
    </div>
  );
}
