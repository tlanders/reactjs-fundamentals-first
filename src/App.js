import React from 'react';
import logo from './logo.svg';
import './App.css';

class Profile extends React.Component {
    render() {
        let hobbies = this.props.hobbies.map(hobby => {
            return <li>{hobby}</li>
        });
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.name} is {this.props.age} years old.</p>
                <p>{this.props.bio}</p>
                <h3>Hobbies</h3>
                <ul>{hobbies}</ul>
            </div>
        )
    }
}
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
      let profiles = this.state.profiles.map(profile => {
          return (
              <Profile name={profile.name}
                   age={profile.age}
                   bio={profile.bio}
                   hobbies={profile.hobbies}
              />
          )
      })
    return (
        <div className="App">
            {profiles}
        </div>
    );
  }
}

export default App;
