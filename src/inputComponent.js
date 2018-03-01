import React, { Component } from "react";

export default class Input extends Component {
  changeHandler(e) {
    this.props.changeValue(e.target.value);
  }

  render() {
    return (
      <input value={this.props.value} onChange={e => this.changeHandler(e)} />
    );
  }
}
