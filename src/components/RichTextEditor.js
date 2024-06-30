"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function RichTextEditor() {
  const [editorContent, setEditorContent] = useState("");
  function handleContentChange(content) {
    setEditorContent(content);
  }

  return (
    <div>
      <ReactQuill value={editorContent} onChange={handleContentChange} />
      <button
        className="px-3 bg-cyan-500 hover:bg-cyan-700 hover:text-white"
        onClick={() => console.log(editorContent)}
      >
        Get content as json
      </button>
    </div>
  );
}
