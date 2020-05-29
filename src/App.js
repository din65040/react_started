import React, { Component } from "react";
// import Rect from "./components/Rect";
import "./App.css";

class App extends Component {
  msgStyle = {
    fontSize: "24px",
    color: "#900",
    margin: "20px 0",
    padding: "5px",
    borderBottom: "2px solid #900",
  };

  msgStyle2 = {
    fontSize: "20px",
    color: "white",
    backgroundColor: "#900",
    margin: "20px 0",
    padding: "5px",
    borderBottom: "2px solid #900",
  };

  btnStyle = {
    fontSize: "16px",
    padding: "0 10px",
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      msg: "count start!",
      flg: true,
    };
    this.doAction = this.doAction.bind(this);
  }

  doAction() {
    this.setState((state) => ({
      counter: state.counter + 1,
      msg: "count" + state.counter,
      flg: !state.flg,
    }));
  }

  render() {
    return (
      <div>
        <h1>React</h1>
        {this.state.flg ? (
          <p style={this.msgStyle1}>count: {this.state.msg}</p>
        ) : (
          <p style={this.msgStyle2}>count: {this.state.msg}</p>
        )}
        <button style={this.btnStyle} onClick={this.doAction}>
          Click
        </button>
      </div>
    );
  }
}

export default App;
