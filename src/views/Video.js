import axios from 'axios';
import React from 'react';
import {withRouter} from 'react-router-dom'
//头部组件
import {headerHandler} from "../components/mine/Header"
import LowCom from '../components/mine/Header'
const Head = withRouter(headerHandler({Ricon:'icon-icon-test2',text:'视频',Licon:'icon-menu'})(LowCom));

class Video extends React.Component {
    render() {
        return (
            <div>
                <Head/>
                视频
            </div>
        )
    }
}

export default Video;
