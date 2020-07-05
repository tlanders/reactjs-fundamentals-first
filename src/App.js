import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile';
import AddProfile from './components/AddProfile';
import {getProfiles} from "./utils/profileApi";

const MyStatelessComponent = props => (
    <p>{props.hello}</p>
);

const MyComponent = props => (
    <div>
        <h1>My Component</h1>
        <p>{props.children}</p>
    </div>
);

let HOCGen = (Component, state) => class extends React.Component {
    constructor(props) {
        super(props);

        this.state = state;
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({count: this.state.count + 1});
        }, 1000);
    }

    render() {
        return <Component {...this.props} {...this.state}/>
    }
}

class Comp1 extends React.Component {
    render() {
        return (
            <div>
                <p>Comp1</p>
                {this.props.count}
            </div>
        )
    }
}

class Comp2 extends React.Component {
    render() {
        return (
            <div>
                <p>Comp2</p>
                {this.props.count}
            </div>
        )
    }
}

let WrappedComp1 = HOCGen(Comp1, {count: 0});
let WrappedComp2 = HOCGen(Comp2, {count: 999});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [
                // {name: 'Sue', age: 32, bio: 'Likes to swim and stuff', hobbies: ['swimming', 'biking']},
                // {name: 'Bill', age: 41, bio: 'Shoots at everything', hobbies: ['shooting']},
            ]
        };

        this.addUser = this.addUser.bind(this);
    }

    /**
     * Use this method to load data after the component is mounted.
     */
    // componentDidMount() {
    //     getProfiles()
    //         .then(profiles => this.setState({
    //             profiles: profiles
    //         }))
    //         .catch(err => console.log(err));
    // }

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
                <WrappedComp1/>
                <WrappedComp2/>
                <MyStatelessComponent hello="I'm a stateless component"/>
                <MyComponent>Some content for my component</MyComponent>
                {profiles}
                <AddProfile addUser={this.addUser}/>
            </div>
        );
    }
}

export default App;
