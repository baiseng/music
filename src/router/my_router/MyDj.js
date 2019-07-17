import React from 'react';
//头部组件
import {headerHandler} from "../../components/mine/Header"
import LowCom from '../../components/mine/Header'
const Head = headerHandler({Ricon:'icon-icon-test2',text:'视频',Licon:'icon-back'})(LowCom);
class MyDj extends React.Component {
    render() {
        return (
            <div>
                <Head/>
                我的歌单
            </div>
        )
    }
}

export default MyDj;
