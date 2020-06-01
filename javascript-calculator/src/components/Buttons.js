import React from "react";

const Buttons = ({ clickHandler }) => {
  return (
    <div className="button-container">
      <button className="btn" id="seven" onClick={clickHandler}>
        7
      </button>
      <button className="btn" id="eight" onClick={clickHandler}>
        8
      </button>
      <button className="btn" id="nine" onClick={clickHandler}>
        9
      </button>
      <button className="btn" id="four" onClick={clickHandler}>
        4
      </button>
      <button className="btn" id="five" onClick={clickHandler}>
        5
      </button>
      <button className="btn" id="six" onClick={clickHandler}>
        6
      </button>
      <button className="btn" id="one" onClick={clickHandler}>
        1
      </button>
      <button className="btn" id="two" onClick={clickHandler}>
        2
      </button>
      <button className="btn" id="three" onClick={clickHandler}>
        3
      </button>
      <button className="btn" id="zero" onClick={clickHandler}>
        0
      </button>
      <button className="btn danger" id="clear" onClick={clickHandler}>
        AC
      </button>
      <button className="btn operator" id="divide" onClick={clickHandler}>
        /
      </button>
      <button className="btn operator" id="multiply" onClick={clickHandler}>
        x
      </button>
      <button className="btn operator" id="subtract" onClick={clickHandler}>
        -
      </button>
      <button className="btn operator" id="add" onClick={clickHandler}>
        +
      </button>
      <button className="btn" id="equals" onClick={clickHandler}>
        =
      </button>
      <button className="btn" id="decimal" onClick={clickHandler}>
        .
      </button>
    </div>
  );
};

export default Buttons;
