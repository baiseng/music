import React from 'react';
import {withRouter} from "react-router-dom"
import {connect} from 'react-redux';
import musicListDetailCreate from '../../store/actionCreators/playlist/musicListDetail'
class MusicListDetail extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.musicListDetail.map((v,i)=>{
                        return(
                            <div key={i}>{v.name}</div>
                            )
                    })

                }
            </div>
        )
    }
    componentWillMount() {
        // console.log(11111111,this.props.location.state.musicListId)//歌单id
        this.props.getMusicListDetail(this.props.location.state.musicListId);
    }

}
function mapStateToProps(state){
    return{
        //本个歌单详情的全部
        musicListDetailTit:state.playlist.changeMusicListDetail.musicListDetailTit,
        //歌单详情内的歌曲列表
        musicListDetail:state.playlist.changeMusicListDetail.musicListDetail
    }
}
function mapDispatchToProps(dispatch){
    return{
        getMusicListDetail(id){
            dispatch(musicListDetailCreate.getMusicListDetail(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MusicListDetail));