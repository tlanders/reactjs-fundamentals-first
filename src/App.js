import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [
        {name : 'Sue', age: 32, bio: 'Likes to swim and stuff', hobbies : ['swimming', 'biking']},
        {name : 'Bill', age: 41, bio: 'Shoots at everything', hobbies : ['shooting']},
      ]
    };
  }

  render() {
    return (
        <div className="App">
          <h3>Bill</h3>
          <p>
            Bill is 40 years old. Likes to shoot.
          </p>
          <h3>Hobbies</h3>
          <ul>
            <li>Shooting</li>
          </ul>
        </div>
    );
  }
}

export default App;
