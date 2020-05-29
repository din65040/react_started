import React, { Component } from "react";

class Message extends Component {
  inputStyle = {
    fontSize: "12px",
    padding: "5px"
  }

  constructor(props) {
    super(props);
    this.doChange = this.doChange.bind(this);
  }

  doChange(e) {
    if (e.target.value.length > this.props.maxlength) {
      this.props.onCheck(e);
      e.target.value = e.target.value.substr(0, this.props.maxlength);
    }
  }

  render() {
    return <input type="text" style={this.inputStyle} onChange={this.doChange} />
  }
}

export default Message;
