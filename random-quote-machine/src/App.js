import React, { Component } from "react";
import Buttons from "./components/Buttons";
import { random } from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotesArr: [{ quote: "", author: "" }],
      index: 0,
    };
  }
  componentWillMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((quotes) =>
        this.setState({
          quotesArr: quotes.quotes,
          index: random(0, this.state.quotesArr.length - 1),
        })
      );
  }

  //To generate a random number I use the "Lodash" library
  selectRandomNumber = () => {
    return random(0, this.state.quotesArr.length - 1);
  };
  updateIndex() {
    this.setState({
      index: this.selectRandomNumber(),
    });
  }

  render() {
    let { index, quotesArr } = this.state;
    if (quotesArr !== undefined) {
      return (
        <div className="App" id="quote-box">
          <div id="text">"{quotesArr[index].quote}"</div>
          <div id="author">- {quotesArr[index].author}</div>
          <Buttons
            quote={quotesArr[index].quote}
            author={quotesArr[index].author}
            title="Next Quote"
            clickHandler={() => this.updateIndex()}
          />
        </div>
      );
    }
  }
}

export default App;
