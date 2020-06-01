import React from "react";

const DrumPad = ({ id, innerText, url, update }) => {
  return (
    <button className={`drum-pad ${innerText}`} id={id} onClick={update}>
      {innerText}
      <audio className="clip" src={url} id={innerText}></audio>
    </button>
  );
};

export default DrumPad;
