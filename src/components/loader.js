import React, { Component } from 'react'

export class Loader extends Component {
  constructor () {
    super()
    this.state = {
      timer: 0
    }
  }

  componentDidMount () {
    this.setState({
      ...this.state,
      timer: setInterval(this.props.incrementist, 1000)
    })
  }

  componentWillUnmount () {
    clearInterval(this.state.timer)
  }

  printingLoop = (count, whatToPrint) => {
    const array = []

    for (let i = 0; i <= count; i++) {
      array.push(whatToPrint())
    }

    return array
  }

  render () {
    return (
      <div>
        <h1 style={{
          display: 'inline'
        }}>Loading</h1>
        {this.printingLoop(this.props.loadCount, Dot)}
      </div>
    )
  }
}

const Dot = () => {
  return (<h1 style={{ display: 'inline' }}>.</h1>)
}
