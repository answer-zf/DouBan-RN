// 项目根组件

import React, {Component} from 'react';

// Router => HashRouter
// Stack 路由分组容器
// Scene => Route
import {Router, Stack, Scene} from 'react-native-router-flux';

import App from './App';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router sceneStyle={{backgroundColor: 'white'}}>
        <Stack key="root">
          {/* 第一个 Scene 默认展示的页面 */}
          {/* key属性： 路由规则的名称，使用 key 做编程式导航 */}
          <Scene key="app" component={App} title="App" hideNavBar={true} />
        </Stack>
      </Router>
    );
  }
}
