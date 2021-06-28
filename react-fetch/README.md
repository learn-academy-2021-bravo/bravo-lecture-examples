# External APIs with Fetch

APIs can be two things:
- External API  - something that someone else made and put on the internet
Internal API - something that you made and it lives in your application (backend)

Request to an API - you are hitting an endpoint with a request/response cycle

```
get '/animals' => index endpoint will return an array of objects in JSON
get '/sights/3?start_date=2021-02-01/end_date=2021-04-02' - array of objects that met a particular condition
```

External APIs:
- post/patch/delete - NO GO!
- get requests only

To make the request we use Fetch

Asynchronous requests:
```
Thing 1 (done)
Thing 2 (done)
Thing 3 (done)
(Promise)         ------> Thing 4 - take a long time, unknown amount of time ????
Thing 5 (jump to here)
```

Promise - the placeholder of an async request, JS Object

Can be in three states:
1) pending
2) fulfilled
3) rejected


IP Address Example:
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

1) When looking for an API:
- documentation
- how to a key
- cost/limit

2) API keys NEVER go into version control (git) - live in special ignored files
