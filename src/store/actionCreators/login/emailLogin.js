import {GET_EMAIL} from '../../actionType/login'
import axios from "axios";
export default{
    upEmail(payload){
        return{
            type:GET_EMAIL,
            payload
        }
    },
    getEmail(email,password){
        return (dispatch)=>{
            // console.log(phone, password);
            axios.get("http://swmonk.top:3000/login?email="+email+"&password="+password)
                .then(({data})=>{
                    console.log(data);
                    const emailData = data;
                    dispatch(this.upEmail({emailData}));
                })
        }
    }
}