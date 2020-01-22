import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router"
import { Switch } from "react-router"
import { logoutUser } from "../../actions";
import { SaveStudentData } from "../../actions";


class StudentSignup extends Component {
    state = { first_name: "", last_name: "", city: "",address:"", birth_date:"", stud_gender:"",
        work_preference:"", min_kid_age:"", is_all_kids:"", is_kid_spectrum:"", is_kid_mentali_ill:"",
        is_kid_delayed_develop:"", is_kid_fisicali_ill:"", is_kid_behavural_diffeculty:"", more_difficulties:"",
        nursing_assistance:"", medical_assistance:"", stud_comments:""};

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
        const { first_name, last_name, city, address, birth_date, stud_gender, work_preference,
            min_kid_age, is_all_kids, is_kid_spectrum, is_kid_mentali_ill, is_kid_delayed_develop,
            is_kid_fisicali_ill, is_kid_behavural_diffeculty, more_difficulties, nursing_assistance,
            medical_assistance, stud_comments} = this.state;
        dispatch(SaveStudentData("student", first_name, last_name, city, address, birth_date, stud_gender,
            work_preference, min_kid_age, is_all_kids, is_kid_spectrum, is_kid_mentali_ill, is_kid_delayed_develop,
            is_kid_fisicali_ill, is_kid_behavural_diffeculty, more_difficulties, nursing_assistance, 
            medical_assistance, stud_comments));
        this.props.history.push('/studenthome');
    };

    render() {
        const { isLoggingOut, logoutError } = this.props;
        return (
            <div>
                <p>רישום סטודנט</p>
                <p>שם פרטי :  <input type="text" id="first_name" onChange={this.handleChange}></input></p>
                <p>שם משפחה :  <input type="text" id="last_name" onChange={this.handleChange}></input></p>
                <p>עיר :  <input type="text" id="city" onChange={this.handleChange}></input></p>
                <p>כתובת :  <input type="text" id="address" onChange={this.handleChange}></input></p>
                <form>
                    תאריך לידה :
                    <input type="date" name="bday" id ="birth_date" onChange={this.handleChange}></input>
                </form> 
                <p>מגדר  :  
                     <select  id="stud_gender" onChange={this.handleChange}>
                        <option value="choose">בחר</option>
                        <option value="male">זכר</option>
                        <option value="female">נקבה</option>
                    </select> </p>
                <p>ניסיון קודם בתחום :  <input type="text" id="experience" size="50" onChange={this.handleChange}></input></p>
                <p>מעוניין לעבוד בתחום  :  
                     <select  id="work_preference" onChange={this.handleChange}>
                        <option value="choose">בחר</option>
                        <option value="all_domains">כל התחומים</option>
                        <option value="mentoring">חונכות</option>
                        <option value="prem_babysiter">בייביסיטר קבוע</option>
                        <option value="one_time_babysiter">בייביסיטר חד פעמי</option>
                    </select> </p>
                <p> אני מעוניין לעשות בייביסיטר לילדים מגיל :   
                    <select  id="min_kid_age" onChange={this.handleChange}>
                        <option value="choose">בחר</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    עד גיל :  
                    <select  id="max_kid_age" onChange={this.handleChange}>
                        <option value="choose">בחר</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select></p>
                <p>אני מעוניין לעשות בייביסיטר לילדים : </p>
                <p><input type="checkbox" id="is_all_kids" onChange={this.handleChange}/> ללא העדפה</p>
                <p><input type="checkbox" id="is_kid_spectrum" onChange={this.handleChange}/> מאובחן על הספקטרום האוטיסטי</p>
                <p><input type="checkbox" id="is_kid_mentali_ill" onChange={this.handleChange}/> מאובחן עם מוגבלות שכלית</p>
                <p><input type="checkbox" id="is_kid_delayed_develop" onChange={this.handleChange}/> מאובחן עם עיכוב התפתחותי</p>
                <p><input type="checkbox" id="is_kid_fisicali_ill" onChange={this.handleChange}/> מאובחן עם מוגבלות פיזית</p>
                <p><input type="checkbox" id="is_kid_behavural_diffeculty" onChange={this.handleChange}/> מתמודד עם קשיים התנהגותיים</p>
                <p>אחר : <input type="text" id="more_difficulties" onChange={this.handleChange}></input></p>
                <p> סיוע סיעודי נדרש : <input type="text" id="nursing_assistance" onChange={this.handleChange}></input></p>
                <p> סיוע רפואי נדרש : <input type="text" id="medical_assistance" onChange={this.handleChange}></input></p>
                <p>הערות : <input type="text" size="100" id="stud_comments" onChange={this.handleChange}></input></p>
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



export default connect(mapStateToProps)(StudentSignup);