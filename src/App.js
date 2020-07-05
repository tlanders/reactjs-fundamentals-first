import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile';
import AddProfile from './components/AddProfile';

let MyStatelessComponent = props => (
    <p>{props.hello}</p>
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [
                {name: 'Sue', age: 32, bio: 'Likes to swim and stuff', hobbies: ['swimming', 'biking']},
                {name: 'Bill', age: 41, bio: 'Shoots at everything', hobbies: ['shooting']},
            ]
        };

        this.addUser = this.addUser.bind(this);
    }

    addUser(profile) {
        // let user = {name: 'Tim', age: 27, bio: 'Reads a lot', hobbies: ['reading', 'spelling', 'pontificating']};
        this.setState({
            "profiles": this.state.profiles.concat([profile])
        });
    }

    render() {
        let profiles = this.state.profiles.map(profile => {
            return (
                <div>
                    <Profile name={profile.name}
                             age={profile.age}
                             bio={profile.bio}
                             hobbies={profile.hobbies}
                    />
                </div>
            )
        })
        return (
            <div className="App">
                <MyStatelessComponent hello="I'm a stateless component"/>
                {profiles}
                <AddProfile addUser={this.addUser}/>
            </div>
        );
    }
}

export default App;
