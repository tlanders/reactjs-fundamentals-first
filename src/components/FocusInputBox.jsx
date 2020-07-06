import React from "react";

class FocusInputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.inputBoxRef = React.createRef();

        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleClick(event) {
        this.setState({
            input: ''
        }, () => {
            this.inputBoxRef.current.focus();
        });
    }

    render() {
        return (
            <div>
                Focus Box: <input ref={this.inputBoxRef} value={this.state.input} onChange={this.handleInput}/>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

export default FocusInputBox;