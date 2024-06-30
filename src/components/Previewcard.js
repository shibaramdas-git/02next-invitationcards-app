import React from "react";

export default function Previewcard({ previewContent }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: previewContent }}
      className="ql-editor"
    ></div>
  );
}
