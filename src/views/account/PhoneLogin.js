import React from 'react';
import {connect} from 'react-redux';
import { List, InputItem } from 'antd-mobile';
import phoneLoginCreate from '../../store/actionCreators/login/phoneLogin'
import Back from '../../components/common/Back'
import {withRouter} from 'react-router-dom';
class PhoneLogin extends React.Component {
    render() {
        return (
            <div>
                <Back></Back>
                <List renderHeader={() => '手机号登陆'}>
                    <InputItem
                        type='number'
                        clear
                        placeholder="手机号"
                        ref='phoneNum'></InputItem>
                    <InputItem
                        type='password'
                        clear
                        placeholder="密码"
                        ref='passWord'></InputItem>
                    <List.Item>
                        <div
                            style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                            onClick={this.props.getPhone.bind(this)}>登录
                        </div>
                    </List.Item>
                </List>
            </div>
        );
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log(123);
        if(nextProps.loginCode===200){
            alert('登录成功')
            this.props.history.push('/');
        }
    }
}
function mapStateToProps(state){
    console.log(state);
    return {
        loginCode: state.login.phoneLogin.phoneCode,
    }
}
function mapDispatchToProps(dispatch){
    return {
        getPhone(){
            dispatch(phoneLoginCreate.getPhone(this.refs.phoneNum.state.value,this.refs.passWord.state.value))
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PhoneLogin));
