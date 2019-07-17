import {GET_PHONE} from '../../actionType/login'
import axios from "axios";
export default{
    upPhone(payload){
        return{
            type:GET_PHONE,
            payload
        }
    },
    getPhone(phone,password){
        return (dispatch)=>{
            axios.get("http://swmonk.top:3000/login/cellphone?phone="+phone+"&password="+password)
                .then(({data})=>{
                    const phoneData = data;
                    dispatch(this.upPhone({phoneData}));
                })
        }
    }
}