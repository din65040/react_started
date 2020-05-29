import React, { Component } from "react";
import Item from "./Item"

class List extends Component {
  number = 1;

  title = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "blue",
  };

  render() {
    let data = this.props.data;

    return (
      <div>
        <p style={this.title}>{this.props.title}</p>
        <ul>
          {data.map((item) => (
            <Item number={this.number++} value={item} key={this.number} />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
