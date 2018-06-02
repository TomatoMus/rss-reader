import * as React from "react";
import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';

import TopScreen from "./TopScreen";
import ArticleScreen from "./ArticleScreen";

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="TopScreen" initial component={TopScreen} title="TopScreen" hideNavBar={true} />
    <Scene key="ArticleScreen" component={ArticleScreen} title="ArticleScreen" />
  </Scene>
);

export default class App extends React.Component {
  render() {
    return <Router scenes={scenes}/>
  }
}
