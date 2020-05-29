import React, { Component } from "react";

class List extends Component {
  li = {
    listStyleType: "square",
    fontSize: "16px",
    color: "#06",
    margin: "0",
    padding: "0",
  };

  num = {
    fontWeight: "bold",
    color: "red",
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li style={this.li}>
        <span style={this.num}>[{this.props.number}]</span>
        {this.props.value}
      </li>
    );
  }
}

export default List;
