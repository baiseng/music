import account from './login'
import Find from "../views/find/Find";
import Account from "../views/account/Account";
import playlist from "./playlist";
import song from "./song";
import VideoMain from "../views/video/VideoMain";
import My from "../views/mine/My";
import Dongtai from "../views/friend/Dongtai";
import details from './details'

export default [
    ...account,
    ...playlist,
    ...song,
    ...details,
    {
        path:"/",
        exact:true,
        component:Find,
        nameStr:"发现",
        isAuthorization:true
    },
    {
        path:"/video",
        exact:true,
        component:VideoMain,
        nameStr:"视频",
        isAuthorization:true
    },
    {
        path:"/mine",
        exact:true,
        component:My,
        nameStr:"我的",
        isAuthorization:true
    },
    {
        path:"/friend",
        exact:true,
        component:Dongtai,
        nameStr:"朋友",
        isAuthorization:true
    },
    {
        path:"/account",
        exact:true,
        component:Account,
        nameStr:"帐号",
        isAuthorization:true
    }
]