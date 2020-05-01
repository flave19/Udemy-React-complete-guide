import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonState] = useState({
    persons: [
      { name: "flav", age: 26 },
      { name: "oreo", age: 2 },
      { name: "mich", age: 28 }
    ]
  });

  const switchNameHandler = () => {
    //console.log('was clicked')
    // DONT DO THIS: this.state.persons[0].name = 'flavian'
    setPersonState({
      persons: [
        { name: "Flavian", age: 28 },
        { name: "Mich", age: 27 },
        { name: "oreo", age: 0 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>
        Switch Name
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;