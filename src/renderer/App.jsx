import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import * as reactNorthstar from '@fluentui/react-northstar';
import Header from '../pages/base/title.view';
import FeedList from '../pages/feeds/feeds.view';
import Separator from '../components/separator/separator.view';
import SettingsView from '../pages/settings/settings.view';
import * as routs from './routs';
import './App.global.css';

export default function App() {
  return (
    <Router>
      <div style={{ width: 300 }} className="header">
        <reactNorthstar.Provider theme={reactNorthstar.teamsTheme}>
          <Header />
        </reactNorthstar.Provider>
      </div>
      <Separator />
      <reactNorthstar.Provider theme={reactNorthstar.teamsDarkTheme}>
        <Switch>
          <Route exact path={routs.SETTINGS} component={SettingsView} />
          <Route path={routs.HOME} component={FeedList} />
        </Switch>
      </reactNorthstar.Provider>
    </Router>
  );
}
