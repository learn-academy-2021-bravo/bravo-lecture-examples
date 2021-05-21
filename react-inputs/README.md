# React Inputs

### Setup
- $ yarn create react-app react-inputs
- $ cd into directory
- $ yarn start

### DOM
- DOM - Document Object Model - a visual representation of code
- DOM - listen for events
- onChange - event listener commonly used for input fields

### JSX Tags
- Two kinds - open and close, and self closing
- Attributes - pieces of info passed into the opening tag that modifies the look or behavior of a tag
- Input tag attributes
  - need to have a type
  - value - connected to state object
  - onChange - gives us the argument "event" for free

### Managing the Input
- Create a method that takes an event or "e" as a parameter and uses e.target.value will return what is typed in the input
- Set the state with e.target.value
- Pass the state to a child component
- Can manipulate the value as needed
