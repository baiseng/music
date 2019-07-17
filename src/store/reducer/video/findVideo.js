import findVideoInit from '../../state/video/findVideo';
import {GET_FIND_VIDEO} from '../../actionType/video'
//find页面视频
export default function (state=findVideoInit,action){
    state = JSON.parse(JSON.stringify(state));
    if(action.type===GET_FIND_VIDEO){
        state.findVideoList = action.result;
    }
    return state;
}
