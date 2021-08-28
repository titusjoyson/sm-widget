import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import * as reactNorthstar from '@fluentui/react-northstar';
import Header from '../pages/base/title.view';
import FeedList from '../pages/feeds/feeds.view';
import Separator from '../components/separator/separator.view';
import SettingsView from '../pages/settings/settings.view';
import SitesView from '../pages/sites/site.view';
import * as routs from './routs';
import { useSelector } from 'react-redux';
import './App.global.css';

export default function App() {
  const settings = useSelector((state) => state.settings);
  let titleBarTheme = null;
  let containerTheme = null;

  if (settings.darkTitleBar) {
    titleBarTheme = reactNorthstar.teamsDarkTheme;
  } else {
    titleBarTheme = reactNorthstar.teamsTheme;
  }

  if (settings.darkTheme) {
    containerTheme = reactNorthstar.teamsDarkTheme;
  } else {
    containerTheme = reactNorthstar.teamsTheme;
  }

  return (
    <Router>
      <div style={{ width: 300 }} className="header">
        <reactNorthstar.Provider theme={titleBarTheme}>
          <Header />
        </reactNorthstar.Provider>
      </div>
      <Separator />
      <reactNorthstar.Provider theme={containerTheme}>
        <Switch>
          <Route exact path={routs.SETTINGS} component={SettingsView} />
          <Route exact path={routs.SITES} component={SitesView} />
          <Route path={routs.HOME} component={FeedList} />
        </Switch>
      </reactNorthstar.Provider>
    </Router>
  );
}
