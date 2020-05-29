import React, { Component } from "react";

class Message extends Component {
  li = {
    fontSize: "16px",
    color: "#06",
    margin: "0",
    padding: "0",
  };

  render() {
    let content = this.props.children;
    let arr = content.split("。");
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].trim() != "") {
        arr2.push(arr[i]);
      }
    }

    let list = arr2.map((value, key) => (
      <li style={this.li} key={key}>
        {value}.
      </li>
    ));

    return (
      <div>
        <h2>{this.props.title}</h2>
        <ol>{list}</ol>
      </div>
    );
  }
}

export default Message;
