//孙娉
import login from "./login";
import video from "./video";
import playlist from './playlist';


//亢昭彤
import {combineReducers} from 'redux';
import dongtai from './dongtai';
import fans from './fans';
import getSongs from './getSongs'

//张静
import user from './userReducer'



export default combineReducers({
    login, video, playlist,
    dongtai,fans,getSongs,
    user
})