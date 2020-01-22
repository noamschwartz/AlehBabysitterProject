import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions";
import { SaveUserData } from "../actions";
import { Button } from 'react-bootstrap';
import { myFirebase } from "../firebase/firebase";
import { Route } from 'react-router';
import { Switch } from 'react-router'; 
import ParentHome from "./Parent/ParentHome";
import StudentHome from "./Student/StudentHome";

class Home extends Component {
    render() {
        var p = this.props;
        var memberEmail = myFirebase.auth().currentUser.email;
        var db = myFirebase.firestore();
        var ref = db.collection("members");
        var query = ref.where("email", "==", memberEmail);
        query.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var data = doc.data();
                var memberType = data.type
                if (memberType == "parent") {

                    p.history.push('/parenthome');
                } else if (memberType == "student") {
                    p.history.push('/studenthome');
                }    
            });
        })
        return (
            <div>
                <p>Babysitter</p>
                <Link to="/parentsignup">
                    <Button color="white" className="is-rounded">
                        <span>הרשם כהורה</span>
                    </Button>
                </Link>  
                <Link to="/studentsignup">
                    <Button color="white" className="is-rounded">
                        <span>הרשם כסטודנט</span>
                    </Button>
                </Link>             
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