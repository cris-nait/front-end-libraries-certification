import React, { Component } from "react";
import DrumPad from "./components/DrumPad";
const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bank: bankOne,
      displayText: "Press a key!",
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    switch (key) {
      case "Q":
      case "W":
      case "E":
      case "A":
      case "S":
      case "D":
      case "Z":
      case "X":
      case "C":
        this.playSound(key);
        this.setState({
          displayText: document.getElementById(key).parentNode.id,
        });
        break;

      default:
        break;
    }
  };
  playSound = (id) => {
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
  };
  handleClicksa = (e) => {
    const { id, innerText } = e.target;
    this.setState({
      displayText: id,
    });
    this.playSound(innerText);
  };
  render() {
    const { bank, displayText } = this.state;
    return (
      <div className="container" id="drum-machine">
        <div className="drumpad-container">
          {bank.map((value) => {
            return (
              <DrumPad
                key={value.keyCode}
                url={value.url}
                id={value.id}
                innerText={value.keyTrigger}
                update={this.handleClicksa}
              />
            );
          })}
        </div>
        <div id="display">{displayText}</div>
      </div>
    );
  }
}

export default App;
