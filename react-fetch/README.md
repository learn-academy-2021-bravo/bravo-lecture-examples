# External APIs with Fetch


API - external API that someone else made and put on the internet
API - internal that you made and it lives in your application (backend)

Request to an API - you are hitting an endpoint

get '/animals' => index endpoint will return an array of objects in JSON
get '/sights/3?start_date=2021-02-01/end_date=2021-04-02' - array of objects that met a particular condition

post/patch/delete - NO GO!

get requests only


To make the request - fetch

Asynchronous requests

thing 1 (done)
thing 2 (done)
thing 3 (done)
(Promise)         ------> thing 4 - take a long time, unknown amount of time ????
thing 5 (here)


Promise - the placeholder of an async request, JS Object
Can be in three states:
1) pending
2) fulfilled
3) rejected



```
import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ip: ""
    }
  }

  getIP = () => {
    fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(payload => {
      this.setState({ ip: payload })
    })
  }

  render() {
    console.log(this.state.ip)
    return (
      <>
        <h1>IP Info</h1>
        <button onClick={ this.getIP }>Get Your IP Info</button>
        <p>Your IP address is: { this.state.ip.ip }</p>
        <p>Your city is: { this.state.ip.city }</p>
        <p>Your timezone is: { this.state.ip.timezone }</p>
      </>
    )
  }
}
export default App
```



API things to remember:

When looking for an API
- documentation
- how to a key
- cost/limit

API keys NEVER go into version control (git) - live in special ignored files
