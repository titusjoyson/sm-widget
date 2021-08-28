import React, { useEffect } from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import * as reactNorthstar from '@fluentui/react-northstar';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../pages/base/title.view';
import FeedList from '../pages/feeds/feeds.view';
import Separator from '../components/separator/separator.view';
import SettingsView from '../pages/settings/settings.view';
import SitesView from '../pages/sites/site.view';
import * as routs from './routs';
import { useWindowSize, useCurrentPath } from '../utils/effects';
import { updateWindowHeight } from '../utils/window';
import { setMaxWindowHeight } from '../redex/actions/config';
import './App.global.css';

export default function App() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const config = useSelector((state) => state.config);
  const pathname = useCurrentPath();
  const [width, height] = useWindowSize();
  let titleBarTheme = null;
  let containerTheme = null;

  useEffect(() => {
    window.electron.ipcRenderer.getMaxWindowZize();

    window.electron.ipcRenderer.on('get-max-window-size', (newHeight) => {
      dispatch(setMaxWindowHeight(newHeight));
    });
  }, []);

  useEffect(() => {
    if (pathname === routs.HOME) {
      updateWindowHeight(parseInt(config.MAX_WINDOW_HEIGHT));
    } else if (height && height > 0) {
      updateWindowHeight(height);
    }
  }, [height]);

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
    <>
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
    </>
  );
}
