//一级路由
import My from '../../views/My'
import Count from '../../views/account/Count'
import Friends from '../../views/Friends'
import Discover from '../../views/Discover'
import Video from '../../views/Video'
export default {
    first_route: [
        {
            pathName: '/',
            exact:true,
            component:My,
            content:'我的',
            icon:'icon-music',
            first:true,

        },
        {
            pathName: '/discover',
            exact:true,
            component:Discover,
            content:'发现',
            icon:'icon-wangyiyunyinyuemusic1193417easyiconnet',
            first:true,

        },
        {
            pathName: '/friends',
            exact:true,
            component:Friends,
            content:'朋友',
            icon:'icon-team',
            first:true,

        },
        {
            pathName: '/video',
            exact:true,
            component:Video,
            content:'视频',
            icon:'icon-icon-test4',
            first:true,

        },
        {
            pathName: '/count',
            exact:true,
            component:Count,
            content:'账户',
            icon:'icon-user',
            first:true,

        },

    ],
    my_route:
        [{
            content: '我的电台',
            pathName: '/myDj',
            icon_type: 'play-circle',
            type:0
        },
            {
                content: '最近播放',
                pathName: '/recentPlay',
                icon_type: 'customer-service',
                type:0
            },
            {
                content: '下载管理',
                pathName: '/downLoadManger',
                icon_type: 'download',
                type:0
            },
            {
                content: '我的收藏',
                pathName: '/myCollections',
                icon_type: 'star',
                type:0
            },
            {
                content: '本地音乐',
                pathName: '/localMusic',
                icon_type: 'folder-open',
                type:0
            }]
}