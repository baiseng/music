import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
//路由
import router from './router'
import GuardRoute from './guardCom/GuardRoute'
import RecentPlay from "./router/my_router/RecentPlay";
import DownLoadManager from "./router/my_router/DownloadManager";
import MyDj from "./router/my_router/MyDj";
import MyCollections from "./router/my_router/MyCollections";
import LocalMusic from "./router/my_router/LocalMusic";

require('./css/public.css');
function App() {
  return (
      <Router>
        {
          router.map((v,i)=>{
            return (
                <Route key={i} exact={v.exact} path={v.path} render={()=><GuardRoute {...v}/>}/>
            )
          })
        }
          <Route path={'/recentPlay'} component={RecentPlay}/>
          <Route path={'/downLoadManger'} component={DownLoadManager}/>
          <Route path={'/myDj'} component={MyDj}/>
          <Route path={'/myCollections'} component={MyCollections}/>
          <Route path={'/localMusic'} component={LocalMusic}/>
      </Router>
  );
}

export default App;
