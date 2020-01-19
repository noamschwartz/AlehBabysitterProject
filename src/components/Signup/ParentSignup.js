import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions";
import { SaveUserData } from "../../actions"; 


class ParentSignup extends Component {
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
        dispatch(SaveUserData("parent", first_name, last_name, city, num_of_kids));
        this.props.history.push('/parenthome');
    };

    render() {
        const { isLoggingOut, logoutError } = this.props;
        return (
            <div>
                <p>Parent Signup</p>
                <p>first name: <input type="text" id="first_name" onChange={this.handleChange}></input></p>
                <p>last name: <input type="text" id="last_name" onChange={this.handleChange}></input></p>
                <p>city: <input type="text" id="city" onChange={this.handleChange}></input></p>
                <p>num of kids: <input type="text" id="num_of_kids" onChange={this.handleChange}></input></p>
                <button onClick={this.handleSaveData}>Sign up</button>
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

export default connect(mapStateToProps)(ParentSignup);