import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";
import { SaveUserData } from "../actions";


class Home extends Component {
    state = { first_name: "", last_name: "", city: "", num_of_kids: ""};

    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSaveData = () => {
        const { dispatch } = this.props;
        const { first_name, last_name, city, num_of_kids } = this.state;
        dispatch(SaveUserData(first_name, last_name, city, num_of_kids));
    };

    render() {
        const { isLoggingOut, logoutError } = this.props;
        return (
            <div>
                <p>Babysitter</p>
                <p><input type="text" id="first_name" onChange={this.handleChange}></input></p>
                <p><input type="text" id="last_name" onChange={this.handleChange}></input></p>
                <p><input type="text" id="city" onChange={this.handleChange}></input></p>
                <p><input type="text" id="num_of_kids" onChange={this.handleChange}></input></p>
                <button onClick={this.handleSaveData}>Upload Data Base</button>
                <button onClick={this.handleLogout}>Logout</button>
                {isLoggingOut && <p>Logging Out....</p>}
                {logoutError && <p>Error logging out</p>}
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
export default connect(mapStateToProps)(Home);