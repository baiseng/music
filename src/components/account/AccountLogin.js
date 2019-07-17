import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';


class AccountLogin extends Component{
    render(){
        return(
            <div>
                <div className="account-top">
                    <div></div>
                    <div>账号</div>
                    <span className="iconfont" style={{fontSize:24}}>&#xe68b;</span>
                </div>
                <div className='login'>
                    <p>登录网易云音乐</p>
                    <p>手机电脑多端同步，尽享海量高品质音乐</p>
                    <NavLink to={'/login'} exact className='navlink-login-btn' style={{display:'block'}}>立即登录</NavLink>
                </div>
            </div>
        )
    }
}
export default AccountLogin;