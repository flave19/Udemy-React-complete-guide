import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name: 'Flav', age: 26},
      {name: 'Mich', age: 27},
      {name: 'oria', age: 1},
     ]
  }

  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button>Switch Name</button>
      <Person name="flav" age="26"/>
      <Person name="mich" age="27">My Hobbies: Racing</Person>
      <Person name="oria" age="1"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now') )
  }
}

export default App;
