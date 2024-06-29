import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { FaDownload } from "react-icons/fa6";

export default function Cardfordashboard({ cardData, create }) {
  // If create is true create a new card
  if (create) {
    return (
      <Link
        href={`/create`}
        className="h-[425px] border-[0.1px] bg-green-100 border-gray-300 shadow-md mt-5 sm:mt-0 rounded-md flex flex-col items-center hover:shadow-xl"
      >
        <p className="">Create a new </p>
        <div className="text-6xl my-auto">+</div>
      </Link>
    );
  }

  //else based on carddata render a detailed card
  const { title, date, content, bgimage, bgcolor, id, category } =
    cardData || {};
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
    wedding_temp1:
      "bg-[url('/img/wedding-temp1.jpeg')] bg-cover h-[90%] flex items-center",
    wedding_temp2:
      "bg-[url('/img/wedding-temp2.jpeg')] bg-cover h-[90%] flex items-center",
    wedding_temp3:
      "bg-[url('/img/wedding-temp3.jpeg')] bg-cover h-[90%] flex items-center",
    birthday_temp1:
      "bg-[url('/img/birthday-temp1.jpeg')] bg-cover h-[90%] flex items-center bg-bottom",
    birthday_temp2:
      "bg-[url('/img/birthday-temp2.jpeg')] bg-cover h-[90%] flex items-center bg-[10%]",
    birthday_temp3:
      "bg-[url('/img/birthday-temp3.jpeg')] bg-cover h-[90%] flex items-center",
    greeting_temp1:
      "bg-[url('/img/greeting-temp1.jpeg')] bg-cover h-[90%] flex items-center",
    greeting_temp2:
      "bg-[url('/img/greeting-temp2.jpeg')] bg-cover h-[90%] flex items-center",
    greeting_temp3:
      "bg-[url('/img/greeting-temp3.jpeg')] bg-cover h-[90%] flex items-center",
  };

  return (
    <div
      className={`h-[480px] sm:h-[525px] mt-5 sm:mt-0 rounded-md border-[0.1px] border-gray-300 shadow-md hover:shadow-xl p-3 flex flex-col justify-between ${
        bgColorVariant[bgcolor] || " "
      }`}
    >
      <h5 className="font-medium">{title || "No title"}</h5>
      <div className={`${bgImageVariant[bgimage] || ""} text-center`}>
        {bgimage ? (
          <p className="w-4/5 mx-auto">{content.slice(0, 120)}</p>
        ) : (
          content.slice(0, 200)
        )}
      </div>
      <div className="flex justify-between items-center">
        <p>{date || "No date"}</p>
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
