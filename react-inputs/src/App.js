import React, { Component } from 'react'
import Yelling from './components/Yelling'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: ""
    }
  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value })
  }

  render() {
    console.log(this.state.userInput)
    return (
      <>
        <h1>Greeter App</h1>
        <input
          type="text"
          value={ this.state.userInput }
          onChange={ this.handleChange }
        />
        <Yelling input={ this.state.userInput } />
      </>
    )
  }
}
export default App
