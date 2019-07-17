import Login from '../views/account/Login'
import PhoneLogin from '../views/account/PhoneLogin'
import EmailLogin from '../views/account/EmailLogin'
export default[
    {
        path:"/login",
        exact:true,
        component:Login,
        nameStr:"登录",
        isAuthorization:true
    },{
        path:"/login/phone",
        exact:false,
        component:PhoneLogin,
        nameStr:"手机号登录",
        isAuthorization:true
    },{
        path:"/login/email",
        exact:false,
        component:EmailLogin,
        nameStr:"邮箱登录",
        isAuthorization:true
    }
]