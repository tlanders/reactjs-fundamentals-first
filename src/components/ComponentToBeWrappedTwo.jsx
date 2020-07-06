import React from "react";
import HigherOrderComponentCreator from "./HigherOrderComponentCreator";

class ComponentToBeWrappedTwo extends React.Component {
    render() {
        return (
            <div>
                <p>ComponentToBeWrappedTwo</p>
                {this.props.count}
            </div>
        )
    }
}

export const WrappedComponentTwo = HigherOrderComponentCreator(ComponentToBeWrappedTwo, {count: 999});

export default ComponentToBeWrappedTwo;