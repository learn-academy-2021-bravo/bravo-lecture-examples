import React, { Component } from 'react'

class MonthlyRunning extends Component {
  constructor(props){
    super(props)
    this.state = {
      miles: 0,
      runs: 0,
      runColor: "purple"
    }
  }

  addMile = () => {
    // increase the mile by 1
    this.setState({ miles: this.state.miles + 1 })
  }

  addRun = () => {
    // increase the runs by 1
    this.setState({ runs: this.state.runs + 1 })
  }

  render() {
    return (
      <>
        <p style={ {color: this.state.runColor} }>
          Miles: { this.state.miles }
        </p>
        <button onClick={ this.addMile }>
          Add a mile
        </button>
        <p>Runs: { this.state.runs }</p>
        <button onClick={ this.addRun }>
          Add a run
        </button>
        <div id="square">{ this.state.runColor }</div>
      </>
    )
  }
}
export default MonthlyRunning
