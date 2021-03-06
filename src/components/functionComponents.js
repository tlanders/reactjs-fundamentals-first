import React from "react";

export function User(props) {
    // const name = 'Charlie';
    return (
        <div>
            <p>Hello!</p>
            <p>Name: {props.name}</p>
            <p>Job: {props.job}.</p>
        </div>
    );
}

export const User2 = props => (
    <div>
        <p>Hello2!</p>
        <p>Name: {props.name}</p>
        <p>Job: {props.job}.</p>
    </div>
);

export const User3 = ({name, job}) => (
    <div>
        <p>Hello3!</p>
        <p>Name: {name}</p>
        <p>Job: {job}.</p>
    </div>
);
