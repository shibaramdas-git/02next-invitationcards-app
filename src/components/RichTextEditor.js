"use client";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Custom toolbar configuration
const toolbarOptions = [
  [{ font: [] }],
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline"],
  [{ color: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],
  [{ align: [] }],
  ["blockquote", "code-block"],
  ["link", "image"],
  ["clean"],
];
const modules = {
  toolbar: toolbarOptions,
};
const formats = [
  "font",
  "header",
  "bold",
  "italic",
  "underline",
  "color",
  "list",
  "bullet",
  "indent",
  "direction",
  "align",
  "blockquote",
  "code-block",
  "link",
  "image",
];

export default function RichTextEditor({ setContent, content }) {
  function handleContentChange(content) {
    setContent(content);
  }

  return (
    <div className="rounded-lg">
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        modules={modules}
        formats={formats}
      />
      {/* Testing output of text editor */}
      {/* <div>
        Output is here
        <div
          dangerouslySetInnerHTML={{
            __html: editorContent,
          }}
        ></div>
      </div> */}
    </div>
  );
}
