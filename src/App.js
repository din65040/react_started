import React, { Component } from "react";
import List from "./components/List"
import "./App.css";

class App extends Component {
  data = [
    "This is list sample.",
    "これはリストのサンプルです。",
    "配列をリストに変換します。"
  ];

  msgStyle = {
    fontSize: "20px",
    color: "#900",
    margin: "20px 0",
    padding: "5px"
  }

  constructor(props) {
    super(props);
    this.state = {
      list: this.data
    };
  }

  render() {
    return <div>
      <h1>React</h1>
      <h2 style={this.msgStyle}>show list</h2>
      <List title="サンプル・リスト"　data={this.data} />
    </div>;
  }
}

export default App;
