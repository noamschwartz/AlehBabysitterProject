import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions";
import { SaveParentData } from "../../actions"; 


class ParentSignup extends Component {
    state = { first_name: "", last_name: "", city: "", address: "", num_of_kids: "", age_of_kid: "", gender_of_kid: "",
    nursing_assistance: "", medical_assistance:"", babysiter_att:"" };

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
        const { first_name, last_name, city, address, num_of_kids, age_of_kid, gender_of_kid,
            nursing_assistance, medical_assistance, babysiter_att} = this.state;
        var is_kid_spectrum = document.getElementById("is_kid_spectrum").checked;
        var is_kid_mentali_ill = document.getElementById("is_kid_mentali_ill").checked;
        var is_kid_delayed_develop = document.getElementById("is_kid_delayed_develop").checked;
        var is_kid_fisical_ill = document.getElementById("is_kid_fisical_ill").checked;
        var is_kid_behavural_diffeculty = document.getElementById("is_kid_behavural_diffeculty").checked;
        dispatch(SaveParentData("parent", first_name, last_name, city, address, num_of_kids, age_of_kid, gender_of_kid, 
        is_kid_spectrum, is_kid_mentali_ill, is_kid_delayed_develop, is_kid_fisical_ill, is_kid_behavural_diffeculty,
        nursing_assistance, medical_assistance, babysiter_att));
        this.props.history.push('/parenthome');
    };

    render() {
        const { isLoggingOut, logoutError } = this.props;
        return (
            <div>
                <p>רישום הורה</p>
                <p>שם פרטי : <input type="text" id="first_name" onChange={this.handleChange}></input></p>
                <p>שם משפחה : <input type="text" id="last_name" onChange={this.handleChange}></input></p>
                <p>עיר : <input type="text" id="city" onChange={this.handleChange}></input></p>
                <p>כתובת : <input type="text" id="address" onChange={this.handleChange}></input></p>
                <p>מספר ילדים : <input type="text" id="num_of_kids" onChange={this.handleChange}></input></p>
                <p>גיל הילד : <input type="text" id="age_of_kid" onChange={this.handleChange}></input></p>
                <p>מגדר הילד :  
                     <select  id="gender_of_kid" onChange={this.handleChange}>
                        <option value="doesn't_matter">לא רלוונטי</option>
                        <option value="male">זכר</option>
                        <option value="female">נקבה</option>
                    </select> </p>
                <p>אבחון מוגבלות הילד : </p>
                <p><input type="checkbox" id="is_kid_spectrum" onChange={this.handleChange}/> מאובחן על הספקטרום האוטיסטי</p>
                <p><input type="checkbox" id="is_kid_mentali_ill" onChange={this.handleChange}/> מאובחן עם מוגבלות שכלית</p>
                <p><input type="checkbox" id="is_kid_delayed_develop" onChange={this.handleChange}/> מאובחן עם עיכוב התפתחותי</p>
                <p><input type="checkbox" id="is_kid_fisical_ill" onChange={this.handleChange}/> מאובחן עם מוגבלות פיזית</p>
                <p><input type="checkbox" id="is_kid_behavural_diffeculty" onChange={this.handleChange}/> מתמודד עם קשיים התנהגותיים</p>
                <p>אחר : <input type="text" id="more_difficulties" onChange={this.handleChange}></input></p>
                <p> סיוע סיעודי נדרש : <input type="text" id="nursing_assistance" onChange={this.handleChange}></input></p>
                <p> סיוע רפואי נדרש : <input type="text" id="medical_assistance" onChange={this.handleChange}></input></p>

                <p>תכונות בייביסיטר מועדפות <input type="text" size="100" id="babysiter_att" onChange={this.handleChange}></input></p>

                <button onClick={this.handleSaveData}>הירשם</button>
                <button onClick={this.handleLogout}>התנתק</button>
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