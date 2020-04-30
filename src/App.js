import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

// class App extends Component {
//   state = {
//     persons: [
//       { name: "Flav", age: 26 },
//       { name: "Mich", age: 27 },
//       { name: "oreo", age: 2 }
//     ]
//   };
//   switchNameHandler = newName => {
//     //console.log('was clicked')
//     // DONT DO THIS: this.state.persons[0].name = 'flavian'
//     this.setState({
//       persons: [
//         { name: newName, age: 28 },
//         { name: "Mich", age: 27 },
//         { name: "oreo", age: 0 }
//       ]
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working</p>
//         <button onClick={() => this.switchNameHandler("FLavian1234")}>
//           Switch Name
//         </button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//           click={this.switchNameHandler.bind(this, "flavianM!!!!")}
//         >
//           My Hobbies: Racing
//         </Person>
//         <Person
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//         />
//       </div>
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now') )
//   }
// }

// export default App;

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