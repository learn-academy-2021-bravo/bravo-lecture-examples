import React, { Component } from "react";

class GreetPerson extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.person}!</h1>
        <button onClick={this.props.greeting}>Greet Next Person</button>
      </div>
    );
  }
}

export default GreetPerson;
