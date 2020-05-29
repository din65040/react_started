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
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(event) {
    this.input = event.target.value;
  }

  doSubmit(event) {
    this.setState({
      message: 'Hello, ' + this.input + '!!'
    })
    event.preventDefault();
  }

  render() {
    return <div>
    <h1>React</h1>
    <Message title="Children!">
    これはコンポーネント内のコンテンツです。
    マルでテキストを分割し、リストにして表示します。
    改行は必要ありません。
    </Message>
    </div>
  }

}

export default App;
