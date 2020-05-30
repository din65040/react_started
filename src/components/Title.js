import React, { Component } from "react";

class Title extends Component {
  static contextType = Samplecontext;

  render() {
    return (
      <div>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}

export default Title;
