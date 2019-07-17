import {
    combineReducers
} from "redux";
import emailLoginInit from '../../state/login/emailLogin';
import phoneLoginInit from '../../state/login/phoneLogin';
import {GET_PHONE} from '../../actionType/login'
import {GET_EMAIL} from '../../actionType/login'
function emailLogin(state=emailLoginInit,action){
    state = JSON.parse(JSON.stringify(state));
    if(action.type===GET_EMAIL){
        state.email = action.payload;
        state.emailCode = action.payload.emailData.code;
    }
    return state;
}
function phoneLogin(state=phoneLoginInit,action){
    state = JSON.parse(JSON.stringify(state));
    if(action.type===GET_PHONE){
        state.phone = action.payload;
        state.phoneCode = action.payload.phoneData.code;
    }
    return state;
}
export default combineReducers({
    phoneLogin,
    emailLogin
})

