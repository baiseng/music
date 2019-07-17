import React from 'react';
import {headerHandler} from "../components/mine/Header"
import LowCom from '../components/mine/Header'
const Head = headerHandler({Ricon:'icon-icon-test2',text:'朋友',Licon:'icon-menu'})(LowCom);
class Friends extends React.Component {
    render() {
        return (
            <div>
                <Head/>
                朋友
            </div>
        )
    }
}

export default Friends;
