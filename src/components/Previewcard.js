import React from "react";

export default function Previewcard({ previewContent }) {
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

  return (
    <div
      dangerouslySetInnerHTML={{ __html: previewContent }}
      className={`ql-editor ${bgColorVariant.green} h-full`}
    ></div>
  );
}
