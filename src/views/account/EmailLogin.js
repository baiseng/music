import React from 'react';
import {connect} from 'react-redux';
import { List, InputItem } from 'antd-mobile';
import emailLoginCreate from '../../store/actionCreators/login/emailLogin'
import Back from '../../components/common/Back'
class PhoneLogin extends React.Component {
    componentDidMount() {
        // this.autoFocusInst.focus();
        // console.log(this.props);
    }
    render() {
        return (
            <div>
                <Back></Back>
                <List renderHeader={() => '网易邮箱登陆'}>
                    <InputItem
                        type='text'
                        clear
                        placeholder="邮箱"
                        ref='emailNum'></InputItem>
                    <InputItem
                        type='password'
                        clear
                        placeholder="密码"
                        ref='passWord'></InputItem>
                    <List.Item>
                        <div
                            style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                            onClick={this.props.getEmail.bind(this)}>登录
                        </div>
                    </List.Item>
                </List>
            </div>
        );
    }
}
function mapStateToProps(state){
    console.log(state);
    return {
        loginCode:state.login.emailLogin.emailCode,
    }
}
function mapDispatchToProps(dispatch){
    return {
        getEmail(){
            dispatch(emailLoginCreate.getEmail(this.refs.emailNum.state.value,this.refs.passWord.state.value))
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PhoneLogin);
