import React, { Component } from 'react'

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
