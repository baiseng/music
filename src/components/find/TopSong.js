import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
class TopSong extends React.Component{
    constructor(){
        super();
        this.state={
            playlists:[]
        }
    }
    componentWillMount() {
        this.getTopMusic.bind(this)();
    }
    getTopMusic(){
        axios.get("http://swmonk.top:3000/personalized/newsong?num="+Math.random())
            .then(({data})=>{
                // console.log(data);
                for(let i=0;i<6;i++){
                    this.setState({
                        playlists:this.state.playlists.concat(data.result[i].song.album)
                    })
                }
                // console.log(this.state.playlists)
            })
    }
    render(){
        return(
            <div>
                <NavLink to={'/top/song'} exact style={{display:'block'}}>
                    <div className='top-music-menu-tit'>
                        最新音乐
                        <i className='iconfont'>&#xe63b;</i>
                    </div>
                </NavLink>
                <div style={{overflow:'hidden'}}>
                    <ul style={{width:'100%',overflow:'hidden'}}>
                        {
                            this.state.playlists.map((v,i)=>{
                                return (
                                    <li style={{width:'30%',float:'left',margin:'18px 6px'}} key={i}>
                                        <NavLink to={
                                            {
                                                pathname:'/top/play/highquality',
                                                state:{
                                                    id:v.id
                                                }
                                            }
                                        } key={i}>
                                            <img src={v.picUrl} alt="" style={{width:'100%'}}/>
                                            <p className='top-music-menu-name'>{v.name}</p>
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default TopSong;