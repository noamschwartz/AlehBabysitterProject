import React from "react";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import ParentSignup from "./components/Signup/ParentSignup";
import StudentSignup from "./components/Signup/StudentSignup";
import ParentHome from "./components/Parent/ParentHome";
import StudentHome from "./components/Student/StudentHome";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
      <Switch>
        <ProtectedRoute
            exact
            path="/"
            component={Home}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
        />
        <Route path="/login" component={Login} />
        <Route path="/parentsignup" component={ParentSignup} />
        <Route path="/studentsignup" component={StudentSignup} />
        <Route path="/parenthome" component={ParentHome} />
        <Route path="/studenthome" component={StudentHome} />

      </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);