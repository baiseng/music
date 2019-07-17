import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//头部组件
import {headerHandler} from "../../components/mine/Header"
import LowCom from '../../components/mine/Header'
//tabs
import {Tabs,} from 'antd-mobile';
import ListCom from '../../components/mine/List'
import userCreator from "../../store/actionCreators/userCreator";

const Head = headerHandler({Ricon:'icon-icon-test2',text:'我的收藏',Licon:'icon-back'})(LowCom);
const tabs = [
    {title: '专辑'},
    {title: '歌手'},
    {title: '视频'},
    {title: '专栏'},
    {title: 'Mlog'},
];
class MyCollections extends React.Component {
    constructor(){
        super();
        this.state={
            singerList:[]
        }
    }
    render() {
        return (
            <div>
                <Head/>
                <Tabs
                    tabs={tabs}
                    initialPage={1}
                    animated={false}
                    useOnPan={false}
                    onChange={(tabdata, index) => {
                        console.log(tabdata, index)
                    }}
                    tabBarActiveTextColor={'red'}
                    tabBarUnderlineStyle={{border: '2px solid red'}}

                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '250px',
                        backgroundColor: '#fff'
                    }}>
                        没有找到本地音乐哦
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff'
                    }}>
                        {/*content区域*/}

                        <ListCom arr={this.state.singerList.slice(0, 10)}
                                 sub0={'mvSize'}
                                 text1={'专辑:'}
                                 text2={'mv:'}
                        />

                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '250px',
                        backgroundColor: '#fff'
                    }}>
                        Content of third tab
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '250px',
                        backgroundColor: '#fff'
                    }}>
                        本地音乐请自行查看
                    </div>
                </Tabs>
            </div>
        )
    }
    componentWillMount() {
        axios.get('/artist/sublist').then(({data}) => {
            this.setState({
                singerList: data.data,
            })
        })

    }

}
function mapStateToProps(state) {
    return{

    }
}

export default connect(mapStateToProps,()=>bindActionCreators(userCreator))(MyCollections)
