import React, { Component } from 'react'
import { Form, Row, SubmitButton, RemoveButton } from './fromComponent'

class App extends Component {
  constructor () {
    super()
    this.state = {
      list: []
    }
  }

  submitValue = newTodo => {
    const objectToPush = {
      title: newTodo,
      isActive: false
    }

    this.setState({
      list: [...this.state.list, objectToPush]
    })
  }

  submitSuccess = index => {
    const title = this.state.list[index].title

    this.setState({
      list: [
        ...this.state.list.splice(0, index),
        {
          title,
          isActive: true
        },
        ...this.state.list.splice(index + 1)
      ]
    })
  }

  removeRow = index => {
    const newList = [...this.state.list.slice(0, index), ...this.state.list.slice(index + 1)]

    this.setState({
      list: newList
    })
  }

  render () {
    return (
      <div className="App">
        <Form buttonName={'Submit'} submitValue={(newValue) => this.submitValue(newValue)}/>
        {this.state.list.map((item, index) => {
          return (
            <div key={index}>
              <Row
                color={item.isActive ? 'green' : 'black'}
                value={item.title}
              />
              <SubmitButton elemIndex={index} onClick={(newIndex) => this.submitSuccess(newIndex)}/>
              <RemoveButton elemIndex={index} onClick={(rowToRemove) => this.removeRow(rowToRemove)}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App
