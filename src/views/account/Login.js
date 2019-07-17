import React from 'react';
import {withRouter,NavLink} from "react-router-dom"
class Login extends React.Component{
    render(){
        return(
            <div className='login-page'>
                <div className='login-top'>
                    <div>
                        <i className='iconfont' style={{fontSize:30}} onClick={()=>this.props.history.go(-1)}>&#xe6a0;</i>
                    </div>
                    <div style={{fontSize:20}}>登录</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                </div>
                <div style={{textAlign:'center'}}>
                    <img style={{height:'150px',margin:50}} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562843949228&di=e9ad585108edd7f9f4be4bb7291d409c&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160726%2F0041955d377a46d7ab272d1030271197_th.png" alt=""/>
                </div>
                <div>
                    <NavLink to={'/login/phone'} exact className='navlink-login-btn' style={{display:'block'}}>手机号登录</NavLink>
                    <NavLink to={'/login/email'} exact className='navlink-login-btn' style={{display:'block'}}>邮箱登录</NavLink>
                    <NavLink to={'/login/register'} exact className='navlink-login-btn' style={{display:'block'}}>注册</NavLink>
                </div>
            </div>
        )
    }
}
export default withRouter(Login);
