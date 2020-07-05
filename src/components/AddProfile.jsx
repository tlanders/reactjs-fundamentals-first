import React from "react";

class AddProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            bio:'',
            hobby:'',
            age:33
        };

        this.handleName = this.handleName.bind(this);
        this.handleBio = this.handleBio.bind(this);
        this.handleHobby = this.handleHobby.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleName(event) {
        this.setState({
            name: event.target.value
        });
    }
    handleBio(event) {
        this.setState({
            bio: event.target.value
        });
    }
    handleHobby(event) {
        this.setState({
            hobby: event.target.value
        });
    }
    handleClick(event) {
        let newProfile = {
            name: this.state.name,
            bio: this.state.bio,
            hobbies: [this.state.hobby],
            age: this.state.age
        }
        this.props.addUser(newProfile);
        this.setState({
            name:'',
            bio:'',
            hobby:'',
            age:33
        });
    }

    render() {
        return (
            <div>
                <h3>Add a new profile</h3>
                <label htmlFor="name">Name: </label><input  name='name' onChange={this.handleName} value={this.state.name}/><br/>
                <label htmlFor="bio">Bio: </label><input  name='bio' onChange={this.handleBio} value={this.state.bio}/><br/>
                <label htmlFor="hobby">Hobby: </label><input name='hobby' onChange={this.handleHobby} value={this.state.hobby}/><br/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

export default AddProfile;