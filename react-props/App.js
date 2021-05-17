import React, { Component } from "react";
import GreetPerson from "./components/GreetPerson";
import PreviousPeople from "./components/PreviousPeople";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        "Bobby Draper",
        "Teddy Roosevelt",
        "Chuck Norris",
        "Carol Shelby",
        "Joe Montana",
        "Stevie Ray Vaughan",
        "Big Tex",
        "Hank Hill",
      ],
      array: [],
    };
  }

  handleGreeting = () => {
    let nextPerson = Math.floor(Math.random() * this.state.people.length);
    this.state.array.push(this.state.people[this.state.currentPerson]);
    this.setState({ currentPerson: nextPerson });
  };

  render() {
    return (
      <>
        <GreetPerson
          person={this.state.people[this.state.currentPerson]}
          greeting={this.handleGreeting}
        />
        {this.state.array.map((value) => {
          return <PreviousPeople prop={value} />;
        })}
      </>
    );
  }
}
export default App;
