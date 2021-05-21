import React, { Component } from 'react'

class Yelling extends Component {

  iAmYelling = (string) => {
    return string.toUpperCase()
  }

  render() {
    // this is JavaScript land
    return (
      <>
        {/* JSX land */}
        <h3>WHAT???</h3>
        <p>{ this.iAmYelling(this.props.input) }</p>
      </>
    )
  }
}
export default Yelling
