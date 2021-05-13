# React

### What is React?
A JavaScript library for building user interfaces
- Library - collection of node modules
- Node modules - individual JavaScript files, pieces of functionality


### Facebook made React to
1. Structure the code to be reusable
2. Handle user interactions


### Reusable
- Components - class component, classes are usable
- OOP - Object Oriented Programming, philosophy of coding that embraces objects


### Handle User Interactions
- DOM - Document Object Model
- DOM is the user interface of a web page, the visual representation of HTML code
- Static DOM - HTML, CSS that a user can look at
- DOM Interaction - scripting language, JavaScript creates the interactions
- User interaction with an HTML tag (HTML element is the same thing as a tag)
- Nodes - HTML tag when referring to the DOM
- Virtual DOM (VDOM) - representation of the DOM that sits behind the scenes and listens for changes, when a change occurs it isolates the node, updates just that node, the user only sees the isolated change


### React Anatomy
- Class components inherit from mother React
- Render method - all class components must have a render method
- Return - every render method needs a return, and can only return one thing
- JSX - JavaScript XML, JavaScript markup language
- React Fragments - allow us to encase the entire return into one thing
- Opening tag <>
- Closing tag </>


### Error Messages
- Seeing a blank page? Check the Chrome dev tools console
- Important error message: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>


### Rendering Components
- Component call
- Self-close tag syntax
- Name of the component: <Header />


### Creating a New React Application
$ yarn create react-app react-intro-sarah
$ cd react-intro-sarah
$ yarn start
