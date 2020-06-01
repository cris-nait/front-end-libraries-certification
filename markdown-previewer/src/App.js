import React, { Component } from "react";
import "./css/main.css";
import marked from "marked";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";

const initialState = `
  This is a paragraph

  **This is bolded text**

  > Block Quotes!

  # Heading
  ## Heading 2

  - list item 1
  - list item 2
  - list item 3


  [Visit my website](https://github.com/cris-nait)

  This is a inline \`<div></div>\`
  This is a block of code:

  \`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
  \`\`\`

`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: initialState,
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;
    // ALLOWS LINE BREAKS
    const markdown = marked(text, { breaks: true });

    return (
      <div className="App">
        <h2>
          CONVERT YOUR MARKDOWN <FontAwesomeIcon icon={faSyncAlt} />
        </h2>
        <Footer />

        <div className="container">
          <Editor text={text} clickHandler={this.handleChange} />
          <Previewer markdown={markdown} />
        </div>
      </div>
    );
  }
}

export default App;
