import React from 'react';
import {headerHandler} from "../components/mine/Header"
import LowCom from '../components/mine/Header'
import axios from 'axios'
//ui
import {Carousel, Grid} from 'antd-mobile';

const Head = headerHandler({Ricon: 'icon-icon-test2', text: '发现', Licon: 'icon-menu'})(LowCom);
let _disc_navArr = [
    {
        icon: 'icon-rili',
        text: '每日推荐'
    }, {
        icon: 'icon-detail',
        text: '歌单'
    }, {
        icon: 'icon-paihangbang',
        text: '排行榜'
    }, {
        icon: 'icon-xianxing_diantai',
        text: '电台'
    }, {
        icon: 'icon-zhibohuifang',
        text: '直播'
    },
];

class Discover extends React.Component {
    constructor() {
        super();
        let disc_navArr = [];
        disc_navArr = _disc_navArr.map((v, i) => {
            return disc_navArr[i] = (
                {
                    icon: (<div style={{
                        width: '40px',
                        height: '40px',
                        background: 'red',
                        borderRadius: '50%',
                        color: 'white',
                        lineHeight: '40px'
                    }}>
                        <i className={'iconfont ' + v.icon} style={{fontSize: '30px'}}/>
                    </div>),
                    text: v.text
                }
            )
        })
        this.state = {
            banners: [],
            disc_navArr,
        }
    }

    render() {
        return (
            <div>
                <Head/>
                {/*轮播图*/}
                {<Carousel
                    autoplay={true}
                    infinite={true}
                >
                    {this.state.banners.map(v => (
                        <a
                            key={v}
                            href="http://www.alipay.com"
                            style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}>
                            <img src={v.pic} style={{width: '80%', height: '120px', margin: '20px'}}/>
                        </a>
                    ))}
                </Carousel>}
                {/*nav*/}
                <Grid data={this.state.disc_navArr} activeStyle={false} columnNum={5}/>
            </div>
        )
    }

    componentDidMount() {
        axios.get('/banner?type=1').then(({data}) => {
            console.log(data, '1111111');
            this.setState({
                banners: data.banners
            })
        })
    }
}

export default Discover;
