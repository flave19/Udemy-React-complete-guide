import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Flav", age: 26 },
      { name: "Mich", age: 27 },
      { name: "oreo", age: 2 }
    ]
  };
  switchNameHandler = newName => {
    //console.log('was clicked')
    // DONT DO THIS: this.state.persons[0].name = 'flavian'
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Mich", age: 27 },
        { name: "oreo", age: 0 }
      ],
      otherState: "some other value",
      showPersons: false
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Flav", age: 28 },
        { name: event.target.value, age: 27 },
        { name: "oreo", age: 0 }
      ]
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
            name={person.name}
            age={person.age}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now') )
  }
}

export default App;
