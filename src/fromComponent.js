import React, { Component } from 'react'

export class Form extends Component {
  submitHandler () {
    this.props.submitValue(this.textInput.value)
  }

  render () {
    return (
      <div>
        <input
          ref={input => {
            this.textInput = input
          }}
        />
        <button onClick={() => this.submitHandler()}>{`${
          this.props.buttonName
          }`}</button>
      </div>
    )
  }
}

export class Row extends Component {
  render () {
    return <h2 style={{ color: this.props.color }}>{this.props.value}</h2>
  }
}

export class SubmitButton extends Component {
  render () {
    return (
      <button onClick={() => this.props.onClick(this.props.elemIndex)}>
        Done
      </button>
    )
  }
}

export class RemoveButton extends Component {
  render () {
    return <button onClick={() => this.props.onClick(this.props.elemIndex)}>Remove</button>
  }
}
