"use client";
import Previewcard from "@/components/Previewcard";
import RichTextEditor from "@/components/RichTextEditor";
import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";

export default function page({ params }) {
  const [content, setContent] = useState("");
  const [input, setInput] = useState({});

  //Whenever content state changes from rich text editor input get updated.
  useEffect(() => {
    setInput((input) => ({ ...input, content }));
  }, [content]);

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setInput((input) => ({ ...input, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const updatedInput = { ...input, date: new Date().toISOString() };
    console.log("input ->", updatedInput);
    setInput(updatedInput);
  }

  return (
    <div className="flex gap-6 max-w-[1440px] mx-auto p-4">
      <article className="w-1/2">
        <h2>Dynamic page for new card creation</h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="mt-8">
            <label htmlFor="title" className="w-[100px] inline-block">
              Title
            </label>
            <input
              id="title"
              name="title"
              value={input.title || ""}
              onChange={handleChange}
              className="outline-none border-[0.1px] border-gray-400 px-4 py-1.5 focus:border-blue-500 w-full"
              placeholder="Short title here"
              required
            />
          </div>
          <div className="mt-8">
            <label htmlFor="subtitle" className="w-[100px] inline-block">
              Subtitle
            </label>
            <input
              id="subtitle"
              name="subtitle"
              value={input.subtitle || ""}
              onChange={handleChange}
              className="outline-none border-[0.1px] border-gray-400 px-4 py-1.5 focus:border-blue-500 w-full "
              placeholder="Subtitle here i.e. subject of the card"
              required
            />
          </div>
          <RichTextEditor setContent={setContent} content={content} />
          <div>
            <button className="bg-cyan-500 hover:bg-amber-500" type="submit">
              Create Card
            </button>
          </div>
        </form>
      </article>
      <article className="w-1/2 border-[0.1px] border-gray-400 p-4 min-h-screen">
        <h2>Preview</h2>
        <p>Title &nbsp;&nbsp;&nbsp;: {input.title}</p>
        <p>Subtitle : {input.subtitle} </p>
        <Previewcard previewContent={content.slice()} />
      </article>
    </div>
  );
}
