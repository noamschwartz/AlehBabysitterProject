import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions";
import { SaveUserData } from "../../actions";

class ParentHome extends Component {

    render() {
        const { isLoggingOut, logoutError } = this.props;
        return (
            <div>
                <p>Parent Home Page</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError
    };
}

export default connect(mapStateToProps)(ParentHome);