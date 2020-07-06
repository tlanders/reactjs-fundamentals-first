import React from "react";

let Profile = props => {
        // console.log('profile rendered');
        return (
            <div>
                    <h3>{props.name}</h3>
                    <p>{props.name} is {props.age} years old.</p>
                    <p>{props.bio}</p>
                    <h3>Hobbies</h3>
                    <ul>{props.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}</ul>
            </div>
        );
}

export default Profile;