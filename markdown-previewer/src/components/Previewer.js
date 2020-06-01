import React from "react";

const Previewer = ({ markdown }) => {
  return (
    <div className="previewer-container">
      <h6>Previewer</h6>
      <div dangerouslySetInnerHTML={{ __html: markdown }} id="preview" />
    </div>
  );
};

export default Previewer;
