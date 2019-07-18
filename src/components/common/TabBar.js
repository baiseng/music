import React from 'react';
import {NavLink} from 'react-router-dom';

export default class TabBar extends React.Component{
    constructor(){
        super();
        this.state={
            type:0
        }
    }
    changeType(num){
        console.log(num,this.state.type)
        // console.log(this);
        this.setState({
            type:num
        },function(){
            console.log('111111111111')
            console.log(this.state.type)
        })
    }
    componentWillMount() {

    }
    render(){
        console.log(1111,this.state.type);
        return (
            <div className='tabBar'>
                <NavLink to={'/'} exact className='tabBar-link' activeClassName='tabBar-link-active' onClick={()=>this.changeType.call(this,1)}>
                    <span className='iconfont'>&#xe650;</span>
                    <p>发现</p>
                </NavLink>
                <NavLink to={'/video'} exact className='tabBar-link' activeClassName='tabBar-link-active' style={{color:this.state.type==2?'#f00a0f':'#666'}} activeStyle={{color:'#f00a0f'}} onClick={()=>this.changeType.call(this,2)}>
                    <span className='iconfont'>&#xe741;</span>
                    <p>视频</p>
                </NavLink>
                <NavLink to={'/mine'} exact className='tabBar-link' activeClassName='tabBar-link-active' style={{color:this.state.type==3?'#f00a0f':'#666'}} activeStyle={{color:'#f00a0f'}} onClick={()=>this.changeType.call(this,3)}>
                    <span className='iconfont'>&#xe61b;</span>
                    <p>我的</p>
                </NavLink>
                <NavLink to={'/friend'} exact className='tabBar-link' activeClassName='tabBar-link-active' style={{color:this.state.type==4?'#f00a0f':'#666'}} activeStyle={{color:'#f00a0f'}} onClick={()=>this.changeType.call(this,4)}>
                    <span className='iconfont'>&#xe685;</span>
                    <p>朋友</p>
                </NavLink>
                <NavLink to={'/account'} exact className='tabBar-link' activeClassName='tabBar-link-active' style={{color:this.state.type==5?'#f00a0f':'#666'}} activeStyle={{color:'#f00a0f'}} onClick={()=>this.changeType.call(this,5)}>
                    <span className='iconfont'>&#xe685;</span>
                    <p>帐号</p>
                </NavLink>
            </div>
        )
    }
}