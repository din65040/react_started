import React, { Component } from "react";
import Message from "./components/Message"
import "./App.css";

class App extends Component {
  input = '';

  msgStyle = {
    fontSize: "20px",
    color: "#900",
    margin: "20px 0",
    padding: "5px"
  }

  constructor(props) {
    super(props);
    this.state = {
      message: 'type your name'
    }
    this.doCheck = this.doCheck.bind(this);
  }

  doCheck(event) {
    alert(event.target.value + "は長すぎます（最大10文字）");
  }

  render() {
    return <div>
    <h1>React</h1>
    <h2>{this.state.message}</h2>
    <Message maxlength="10" onCheck={this.doCheck}></Message>
    </div>
  }
}

export default App;
