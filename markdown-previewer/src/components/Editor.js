import React from "react";

const Editor = ({ text, clickHandler }) => {
  return (
    <div className="editor-container">
      <h6>Input</h6>
      <textarea id="editor" value={text} onChange={clickHandler} />
    </div>
  );
};

export default Editor;
