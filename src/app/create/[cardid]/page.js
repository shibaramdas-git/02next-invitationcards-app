"use client";
import Previewcard from "@/components/Previewcard";
import RichTextEditor from "@/components/RichTextEditor";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";

export default function page({ params }) {
  const [content, setContent] = useState("");
  console.log(content);
  return (
    <div className="flex gap-6">
      <article className="w-1/2 border border-black">
        <h2>Dynamic page for new card creation</h2>
        <p>Card id :- {params.cardid}</p>
        <RichTextEditor setContent={setContent} content={content} />
      </article>
      <article className="w-1/2 border-[0.1px] border-gray-400">
        <h2>Preview </h2>
        <Previewcard previewContent={content.slice()} />
      </article>
    </div>
  );
}
