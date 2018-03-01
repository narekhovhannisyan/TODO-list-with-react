import React, { Component } from "react";
import { Form, Row, SubmitButton, RemoveButton } from "./fromComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  submitValue = newTodo => {
    const objectToPush = {
      title: newTodo,
      isActive: false
    };

    this.setState({
      list: [...this.state.list, objectToPush]
    });
  };

  submitSuccess = index => {
    this.setState({
      list: [
        ...this.state.list.splice(0, index),
        {
          ...this.state.list[index],
          isActive: true
        },
        ...this.state.list.splice(index + 1)
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <Form buttonName={"Submit"} submitValue={this.submitValue} />
        {this.state.list.map((item, index) => {
          return (
            <div key={index}>
              <Row
                color={item.isActive ? "green" : "black"}
                value={item.title}
              />
              <SubmitButton elemIndex={index} onClick={this.submitSuccess} />
              <RemoveButton />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
