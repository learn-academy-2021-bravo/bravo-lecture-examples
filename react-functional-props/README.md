# React Review

### Intro
- $ yarn create react-app app-name
- Class components must have import, export, render and return (one thing, typically a React Fragment)
- Inside the JSX is the UI (User Interface)

```
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <h1>Instacart Rip Off</h1>
        <h3>Trader Joes</h3>
        <ul>
          <li>Peanut Butter</li>
          <li>Apples</li>
          <li>Cheese</li>
        </ul>
        <h3>Ralphs</h3>
        <ul>
          <li>Laundry Detergent</li>
          <li>Dish Soap</li>
          <li>Paper towels</li>
        </ul>
      </>
    )
  }
}
export default App
```
### State
- If a component has state it needs a constructor
- State is an object
- State manages data

```
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      traderJoes: ["Peanut Butter", "Apples", "Cheese", "Oranges"],
      ralphs: ["Laundry Detergent", "Dish Soap", "Paper towels", "Chips"]
    }
  }
  render() {
    return (
      <>
        <h1>Instacart Rip Off</h1>
        <h3>Trader Joes</h3>
        <ul>
          { this.state.traderJoes.map(value => {
            return <li>{ value }</li>
          })}
        </ul>
        <h3>Ralphs</h3>
        <ul>
          { this.state.ralphs.map(value => {
            return <li>{ value }</li>
          })}
        </ul>
      </>
    )
  }
}
export default App
```

### Props
- Props is an object, pipeline from parent to child components, one directional flow of information
- All other components can be stored in folders for organizational purposes
- PacsalCase.js - the same name as the class
- src/components/List.js
- List component is display component
- Separation of concerns - keeping the logic in particular places and keeping display components dumb

```
import React, { Component } from 'react'
import './App.css'
import List from './components/List'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      traderJoes: ["Peanut Butter", "Apples", "Cheese", "Oranges", "Pineapple", "Ice Cream"],
      ralphs: ["Laundry Detergent", "Dish Soap", "Paper towels", "Chips"],
      ace: ["Batteries", "Hammer", "Potting Soil"]
    }
  }
  render() {
    return (
      <>
        <h1>Instacart Rip Off</h1>
        <h3>Trader Joes</h3>
        <List cartItem={ this.state.traderJoes } />
        <h3>Ralphs</h3>
        <List cartItem={ this.state.ralphs } />
        <h3>Ace Hardware</h3>
        <List cartItem={ this.state.ace } />
      </>
    )
  }
}
export default App
```

### Functional Props
- Method - function that belongs to a class
- Doesn't need a variable declaration
- Does need to be an arrow function
- Since info only flows one way in React we have to use a function call to pass information back "up river" from a child to a parent component
- The function gets defined in the parent (where we want the info to end up) and passed down to the child with props
- The function gets called in the child component and we pass in the information as an argument
- Look out for immediately invoked functions - they'll get ya!
- Setting state using the Spread operator, Rest operator
let nums = [1, 2, 3]
nums
[1, 2, 3]
let otherNums = [3, 4, 5, ...nums, 4, 5, 6]
otherNums
[3, 4, 5, 1, 2, 3, 4, 5, 6]
nums
[1, 2, 3]


Error: Each child in a list should have a unique "key" prop.
- Fix by adding the optional index parameter to map and passing it to the key on the outermost JSX tag 
```
<ul>
  { this.state.cart.map((value, index) => {
    return <li key={ index }>{ value }</li>
  })}
</ul>
```
