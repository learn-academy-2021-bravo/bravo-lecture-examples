import React, { Component } from 'react'
// import mocknasa from './mocknasa'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      nasa: null,
      pic: null
    }
  }

  componentDidMount(){
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(response => response.json())
    .then(payload => this.setState({ nasa: payload.photos }))
    .catch(error => console.log(error))
  }

  getPic = () => {
    let randomNum = Math.floor(Math.random() * this.state.nasa.length)
    this.setState({ pic: this.state.nasa[randomNum].img_src })
  }

  render() {
    console.log(this.state.nasa)
    return (
      <>
        <h1>Mars Rover Data</h1>
        <button onClick={ this.getPic }>Click me to get pics of Mars</button>
        <br />
        <br />
        { this.state.pic && <img src={ this.state.pic } alt="random Mars Rover" style={{ height: "300px" }} /> }

      </>
    )
  }
}
export default App
