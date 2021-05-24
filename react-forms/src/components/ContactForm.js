import React, { Component } from 'react'

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        contactName: "",
      },
    };
  }

  
  render() {
    return (
      <form>
        {/* for our purposes Form will take two tags nested inside of it. We will use these tags a few time so they will need to be set apart by a few pieces of information  First up whave the Label ###type Label### The label tag will allow us to let our user know what this field in our form should be used for.  */}
        <label>Whats your name?</label>
        {/* Next up we have Input ### Type Input## the input is oging to be one of the interactive parts of our form field.   */}
        <input 
        // first type will be text although this is default we still want to pass this is for readability
            type="text" 
            // next is a very important part we must name our inputs the same values as the keys that we want them connected too in state 
            name="contactName" 
            // lastly we want our input field to display whatever is in state when we load the page. 
            value={this.state.form.contactName}
        />
        {/* breaks can be nice */}
        <br/>
      </form>
    );
  }
}

// PAUSE HERE FOR A MOMENT
//------------------------------------------------------------------------
import React, { Component } from 'react'

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        contactName: "",
      },
    };
  }
  handleChange = (e) => {
    //first what I want to do is destruture the Form object from state/
    const { form } = this.state;
    // second I want to pass into the state object the new information we are taking in. I can call on the key in the state with the [ ] and a string with the the name of the key.
    form["contactName"] = e.target.value;
    // from here we want to set the state of our form with this new data. e.target.value is all of 
    this.setState({ form: form });
  };
  
  render() {
    return (
      <form>
       
        <label>Whats your name?</label>
       
        <input 
            type="text" 
            value={this.state.contactName}
            onChange={this.handleChange} 
        />
        <br/>
      </form>
    );
  }
}
// PAUSE HERE FOR A MOMENT
//------------------------------------------------------------------------
import React, { Component } from 'react'

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        contactName: "",
      },
    };
  }

  // If I wanted to have multpile inputs I would have to make a single handle change for every input... Thats not very dynamic and a lot more coding than I care to do. Instead what I'll do is make this handleChange dynamic by setting the obj key to something I can set and find in the event. I can name the input attribute with the tag "name"
  handleChange = (e) => {
   
    const { form } = this.state;
    
    form[e.target.name] = e.target.value;
  
    this.setState({ form: form });
  };
  
  render() {
    return (
      <form>
       
        <label>Whats your name?</label>
       
        <input 
            type="text" 
            // INSERT NAME ATTRIBUTE
            // okay this is going to be important for your challenge today
            //  I want this tag to have the same exact name as the key in the state obj that I want to update so that they are correlated when I call upon the onchange event ### INSERT e.target.name ###
            name="contactName" 
            value={this.state.contactName}
            onChange={this.handleChange} 
        />
        <br/>
      </form>
    );
  }
}
// PAUSE HERE FOR A MOMENT
//------------------------------------------------------------------------
import React, { Component } from 'react'

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        contactName: "",
        contactSubject: "",
        contactText: "",
      },
    };
  }
  handleChange = (e) => {
    const { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };
  
  render() {
    return (
      <form>
        <label>Whats your name?</label>
        <input 
            type="text" 
            name="contactName" 
            value={this.state.contactName}
            onChange={this.handleChange} 
        />
        <br/>
         {/* here I want to add the rest of the data that is going to be passed over inot the handlechange and eventually App.js ### add ...Subject and ...Text ### */}
        <label>Whats the subject?</label>
        <input 
            type="text" 
            name="contactSubject" 
            value={this.state.contactName}
            onChange={this.handleChange} 
        />
        <br/>
        <label>Talk to me?</label>
        <input 
            type="text" 
            name="contactText" 
            value={this.state.contactName}
            onChange={this.handleChange} 
        />
        <br/>
      </form>
    );
  }
}
// PAUSE HERE FOR A MOMENT
//------------------------------------------------------------------------
import React, { Component } from 'react'

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        contactName: "",
        contactSubject: "",
        contactText: "",
      },
    };
  }
  handleChange = (e) => {
    const { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };
  // And one of the last things we need here is a way to package our data up and send it back over to our App.js. 
  handleSubmit = (e) => {
  
    this.props.handleFormSubmit(this.state.form)
  }
  
  render() {
    return (
      <form>
        <label>Whats your name?</label>
        <input 
            type="text" 
            name="contactName" 
            value={this.state.contactName}
            onChange={this.handleChange} 
        />
        <br/>
        <label>Whats the subject?</label>
        <input 
            type="text" 
            name="contactSubject" 
            value={this.state.contactName}
            onChange={this.handleChange} 
        />
        <br/>
        <label>Talk to me?</label>
        <input 
            type="text" 
            name="contactText" 
            value={this.state.contactName}
            onChange={this.handleChange} 
        />
        <br/>
        <input
            type="submit"
            value="Submit Form"
            onClick={ this.handleSubmit }
         />
      </form>
    );
  }
}
// PAUSE HERE FOR A MOMENT
// --------------------------------------------------
// ######### JUMP OVER AND SET UP CONDITIONAL RENDERING ##############


// --------------------------------------------------
// PAUSE HERE FOR A MOMENT
// We may notice some strange behavior from our application, specifically that the page is refreshing after we submit the form. This is React working overtime, and we want to stop those default actions from happening. In the handleSubmit method, we can reference a method that belongs to the event object generated by the event listener onClick called prevent default ### Add prevent default to handleSubmit ### e.preventDefault()

// --------------------------------------------------
// JUPM OVER FOR BIG TAKEAWAYS