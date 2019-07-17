export default {
    userInfo:localStorage.userInfo?JSON.parse(localStorage.userInfo):'',
    token: localStorage.token,
    musicList:[],
    subcount:{}
}