import React from "react";

const HasChildrenComponent = props => (
    <div>
        <h1>Component With Children</h1>
        <p>{props.children}</p>
    </div>
);

export default HasChildrenComponent;