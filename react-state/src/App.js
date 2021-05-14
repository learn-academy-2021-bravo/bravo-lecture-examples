import React, { Component } from 'react'
import MonthlyRunning from './components/MonthlyRunning'
import './App.css'

class App extends Component {

  render() {
    return (
      <>
        <h1>Mile Tracker</h1>
        <h3>January</h3>
        <MonthlyRunning />
        <h3>February</h3>
        <MonthlyRunning />
        <h3>March</h3>
        <MonthlyRunning />
      </>
    )
  }
}

export default App
