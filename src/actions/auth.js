import { myFirebase } from "../firebase/firebase";
import "firebase/firestore";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

export const SAVE_DATA_SUCCESS = "VERIFY_SAVE_DATA"
export const SAVE_DATA_FAILURE = "SAVE_DATA_FAILURE"



const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};

const loginError = () => {
    return {
        type: LOGIN_FAILURE
    };
};

const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    };
};

const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

const receiveData = () => {
    return {
        type: SAVE_DATA_SUCCESS
    };
};


const DataError = () => {
    return {
        type: SAVE_DATA_FAILURE
    };
};

const logoutError = () => {
    return {
        type: LOGOUT_FAILURE
    };
};

const verifyRequest = () => {
    return {
        type: VERIFY_REQUEST
    };
};

const verifySuccess = () => {
    return {
        type: VERIFY_SUCCESS
    };
};

export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    myFirebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(receiveLogin(user));
        })
        .catch(error => {
            //Do something with the error if you want!
            dispatch(loginError());
        });
};

export const loginUserByGoogle = (provider) => dispatch => {
    dispatch(requestLogin());

    myFirebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
            dispatch(receiveLogin(user));
        })
        .catch(error => {
            //Do something with the error if you want!
            dispatch(loginError());
        });
};

export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    myFirebase
        .auth()
        .signOut()
        .then(() => {
            dispatch(receiveLogout());
        })
        .catch(error => {
            //Do something with the error if you want!
            dispatch(logoutError());
        });
};
export const SaveStudentData = (type,  first_name, last_name, city, address, birth_date, stud_gender,
    work_preference, min_kid_age, is_all_kids, is_kid_spectrum, is_kid_mentali_ill, is_kid_delayed_develop,
    is_kid_fisicali_ill, is_kid_behavural_diffeculty, more_difficulties, nursing_assistance, 
    medical_assistance, stud_comments)=> dispatch=> {
    const baseDb = myFirebase.firestore();
    var user = myFirebase.auth().currentUser
    baseDb.collection("members").doc(user.uid).set({
        email: myFirebase.auth().currentUser.email,
        type: type,
        first_name: first_name,
        last_name: last_name,
        city: city,
        address: address,
        birth_date: birth_date,
        stud_gender: stud_gender,
        work_preference: work_preference, 
        min_kid_age: min_kid_age,
        is_all_kids: is_all_kids,
        is_kid_spectrum: is_kid_spectrum,
        is_kid_mentali_ill: is_kid_mentali_ill,
        is_kid_delayed_develop: is_kid_delayed_develop,
        is_kid_fisicali_ill: is_kid_fisicali_ill,
        is_kid_behavural_diffeculty: is_kid_behavural_diffeculty,
        more_difficulties: more_difficulties,
        nursing_assistance: nursing_assistance,
        medical_assistance: medical_assistance,
        stud_comments: stud_comments
    })
};

export const SaveParentData = (type, first_name, last_name, city, address, num_of_kids, age_of_kid, 
    gender_of_kid, is_kid_spectrum, is_kid_mentali_ill, is_kid_delayed_develop, is_kid_fisical_ill,
     is_kid_behavural_diffeculty, nursing_assistance, medical_assistance, babysiter_att) => dispatch => {
    const baseDb = myFirebase.firestore();
    var user = myFirebase.auth().currentUser
    baseDb.collection("members").doc(user.uid).set({
        email: myFirebase.auth().currentUser.email,
        type: type,
        first_name: first_name,
        last_name: last_name,
        city: city,
        address: address,
        num_of_kids: num_of_kids,
        age_of_kid: age_of_kid, 
        gender_of_kid: gender_of_kid, 
        is_kid_spectrum: is_kid_spectrum,
        is_kid_mentali_ill: is_kid_mentali_ill,
        is_kid_delayed_develop: is_kid_delayed_develop,
        is_kid_fisical_ill: is_kid_fisical_ill,
        is_kid_behavural_diffeculty: is_kid_behavural_diffeculty,
        nursing_assistance: nursing_assistance,
        medical_assistance: medical_assistance, 
        babysiter_att: babysiter_att
    })
};


export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    myFirebase
        .auth()
        .onAuthStateChanged(user => {
            if (user !== null) {
                dispatch(receiveLogin(user));
            }
            dispatch(verifySuccess());
        });
};