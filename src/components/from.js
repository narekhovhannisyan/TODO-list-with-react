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
        <button onClick={() => this.submitHandler()}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    this.submitHandler()
                  }
                }}>{`${this.props.buttonName}`}
        </button>
      </div>
    )
  }
}

export class Row extends Component {
  render () {
    return <h2 style={{ color: this.props.color }}>{this.props.value}</h2>
  }
}
