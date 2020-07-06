import React from "react";
import PropTypes from "prop-types";

class PropTypeComponent extends React.Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Account: {this.props.account}</p>
                <p>Balance: {this.props.balance}</p>
            </div>
        )
    }
}

PropTypeComponent.propTypes = {
    name: PropTypes.string.isRequired,
    account: PropTypes.string,
    balance: PropTypes.number
};

PropTypeComponent.defaultProps = {
    name: 'Unknown',
    account: 'Unknown',
    balance: 0
}

export default PropTypeComponent;