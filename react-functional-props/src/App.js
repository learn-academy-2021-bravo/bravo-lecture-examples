import React, { Component } from 'react'
import './App.css'
import List from './components/List'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      traderJoes: ["Peanut Butter", "Apples", "Cheese", "Oranges", "Pineapple", "Ice Cream"],
      ralphs: ["Laundry Detergent", "Dish Soap", "Paper towels", "Chips"],
      ace: ["Batteries", "Hammer", "Potting Soil"],
      cart: []
    }
  }

  addItem = (item) => {
    this.setState({ cart: [...this.state.cart, item] })
  }

  render() {
    return (
      <>
        <h1>Instacart Rip Off</h1>
        <h3>Trader Joes</h3>
        <List
          cartItem={ this.state.traderJoes }
          addItem={ this.addItem }
        />
        <h3>Ralphs</h3>
        <List
          cartItem={ this.state.ralphs }
          addItem={ this.addItem }
        />
        <h3>Ace Hardware</h3>
        <List
          cartItem={ this.state.ace }
          addItem={ this.addItem }
        />
        <h3>Cart</h3>
        <ul>
          { this.state.cart.map((value, index) => {
            return <li key={ index }>{ value }</li>
          })}
        </ul>
      </>
    )
  }
}
export default App
