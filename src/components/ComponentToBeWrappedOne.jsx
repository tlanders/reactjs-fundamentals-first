import React from "react";
import HigherOrderComponentCreator from "./HigherOrderComponentCreator";

class ComponentToBeWrappedOne extends React.Component {
    render() {
        return (
            <div>
                <p>ComponentToBeWrappedOne</p>
                {this.props.count}
            </div>
        )
    }
}

export const WrappedComponentOne = HigherOrderComponentCreator(ComponentToBeWrappedOne, {count: 0});

export default ComponentToBeWrappedOne;