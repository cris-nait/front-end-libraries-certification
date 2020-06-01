import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="display" id="display">
        {this.props.text}
      </div>
    );
  }
}

export default Display;
