import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Profile from './components/Profile';
import AddProfile from './components/AddProfile';
import {WrappedComponentOne} from "./components/ComponentToBeWrappedOne";
import {WrappedComponentTwo} from "./components/ComponentToBeWrappedTwo";

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
        let profiles = this.state.profiles.map((profile, index) => {
            return (
                <Profile name={profile.name}
                         age={profile.age}
                         bio={profile.bio}
                         hobbies={profile.hobbies}
                         key={index}
                />
            )
        })
        return (
            <div className="App">
                {/*<FocusInputBox/>*/}
                {/*<PropTypeComponent name='Jimmy' account={'Savings'} balance={3.25}/>*/}
                {/*<PropTypeComponent name='Sally' account={'Checking'} balance={99.88}/>*/}
                {/*<PropTypeComponent/>*/}
                {/*<WrappedComponentOne/>*/}
                {/*<WrappedComponentTwo/>*/}
                {/*<MyStatelessComponent hello="I'm a stateless component"/>*/}
                {/*<HasChildrenComponent>Some content for my component</HasChildrenComponent>*/}
                {profiles}
                <AddProfile addUser={this.addUser}/>
            </div>
        );
    }
}

export default App;
