import React, { Component } from 'react'

export class Loader extends Component {
  constructor () {
    super()
    this.state = {
      timer: 0
    }
  }

  componentWillMount () {
    this.setState({
      ...this.state,
      timer: setInterval(this.props.incrementist, 1000)
    })
  }

  componentWillUnmount () {
    clearInterval(this.state.timer)
  }

  loopDots = (count) => {
    return '.'.repeat(count)
  }

  render () {
    return (
      <div>
        <h1 style={{
          display: 'inline'
        }}>Loading</h1>
        {this.loopDots(this.props.loadCount)}
      </div>
    )
  }
}
