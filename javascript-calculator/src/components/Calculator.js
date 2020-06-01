import React, { Component } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import stringCalculator from "string-calculator";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: true,
      decimal: false,
      current: "0",
    };
  }
  handleClick = (e) => {
    const { current, operator } = this.state;
    const { innerHTML } = e.target;

    //operators switch cases
    switch (innerHTML) {
      case "AC":
        this.setState({
          current: "0",
          operator: true,
        });
        break;
      case "+":
      case "/":
      case "-":
        this.setState({
          current: current + innerHTML,
          operator: true,
        });
        break;
      case ".":
        if (operator) {
          this.setState({
            current: current + innerHTML,
            operator: false,
          });
        }
        break;
      case "=":
        this.setState({
          current: stringCalculator(current),
          operator: true,
        });
        break;
      case "x":
        this.setState({
          current: current + "*",
          operator: true,
        });
        break;

      default:
        current === "0"
          ? this.setState({
              current: innerHTML,
            })
          : this.setState({
              current: current + innerHTML,
            });
        break;
    }
  };

  render() {
    const { current } = this.state;
    return (
      <div className="calculator-container">
        <Display text={current} />
        <Buttons clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
