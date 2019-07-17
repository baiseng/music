import React from 'react';
import {NavLink} from 'react-router-dom';

export default class TabBar extends React.Component{
    render(){
        return (
            <div className='tabBar'>
                <NavLink to={'/'} exact style={{display:'block'}} className='tabBar-link'>
                    <span className='iconfont'>&#xe650;</span>
                    <p>发现</p>
                </NavLink>
                <NavLink to={'/video'} exact style={{display:'block'}} className='tabBar-link'>
                    <span className='iconfont'>&#xe741;</span>
                    <p>视频</p>
                </NavLink>
                <NavLink to={'/mine'} exact style={{display:'block'}} className='tabBar-link'>
                    <span className='iconfont'>&#xe61b;</span>
                    <p>我的</p>
                </NavLink>
                <NavLink to={'/friend'} exact style={{display:'block'}} className='tabBar-link'>
                    <span className='iconfont'>&#xe617;</span>
                    <p>朋友</p>
                </NavLink>
                <NavLink to={'/account'} exact style={{display:'block'}} className='tabBar-link'>
                    <span className='iconfont'>&#xe658;</span>
                    <p>帐号</p>
                </NavLink>
            </div>
        )
    }
}