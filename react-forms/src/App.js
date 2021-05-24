// **** REACT FORMS ******
// Last time we went over React inputs where Sarah introduced to us onChange and the Event listener. Today we are going over React Forms: Specifically we are going to make a contact form today that could be used for a portfolio or a project website. So before we get started Lets go over some vocab we should be familiar with.

// ### Vocabulary Questions: 

//  ###  JSX TAGS 
    //      2 Types of Tag closing: Self Closing and Not Self Closing
    //      Props: data that is passed down into child components through Component Calls
    //      Attributes: pieces of info that modify our JSX Tags
    //      Input Type: a selection of different built in kinds of Inputs
    //      
    //      Input: Self Closing Tag; the place where a user inserts their data
    
    // ### DOM
    //       DOM: Document Object Model - a visual representation of Code
    //       State: An Object that can be updated with the setState() Method
    //      onChange: a built in attribute that listens for (e)
    //      (e) / Event : an object repesentation of the DOM - that holds muiltple layers all of which can be accessed by dot notation. 
    //      e.target.value: The changes or interactions that our user is making/ having to/with the DOM. Clicks on an element, values typed into a field  
    //       Conditional Rendering: A property of react that if a condition is not met (ex. a falsey value && <h1> Hello World</h1>) the tags will not display. 
              // { 1 === 2 && <h1> Hello World </h1>}
    
    // ### New Vocab Form: <form> is an HTML/JSX tag that wraps a collection of user inputs. Forms are a very common tool that allows developers to interact with a user. Managing form data appropriately is an important part of development. What are some forms that you've seen around the web?
//      Value: Value will be something we connect to the State Object
//          - email forms
//          - address forms
//          - blog inputs
//          - twitter posts
//          - url inputs 


       
import React, { Component } from 'react'
import './App.css';
import ContactForm from './components/ContactForm'

class App extends Component {
  constructor(){
    super()
    this.state = {
      form : null
    }
  }
  
  handleFormSubmit= (newContact) => {
    this.setState({ form: newContact})
  }

  render(){
// GET THE APP RUNNING WITH A HELLO WORLD
    return (
      <>
        <div>Hello World</div>
        <ContactForm />
        {/*  <ContactForm handleFormSubmit={this.handleFormSubmit} /> */}
        {this.state.form && (
          <div>
            <p>Contact name: {this.state.form.contactName}</p>
            <p>Contact Subject: {this.state.form.contactSubject}</p>
            <p>Contatc Message: {this.state.form.contactText}</p>
          </div>
        )}
      </>
    );
  }
}

export default App;
//  ### BIG TAKE-AWAYS
//          We can make Forms in React using the Form Tag
//          Using the Name attribute we can dynamically pass information with a single method
//          We can hold state in certain components -- best practice is for very specific tasks -- like holding one Form obj
//          Using the onChange we can save values
//          We can pass objs to our parent classes through Methods - 
//          We can access Obj information using dot notation
//          We can conditionally render information without reloading our webpage
//   