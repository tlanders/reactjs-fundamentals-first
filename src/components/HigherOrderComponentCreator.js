import React from "react";

let HigherOrderComponentCreator = (Component, state) => class extends React.Component {
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

export default HigherOrderComponentCreator;