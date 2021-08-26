import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider, teamsTheme } from '@fluentui/react-northstar';
import Header from '../pages/base/title.view';
import FeedList from '../pages/feeds/feeds.view';
import Separator from '../components/separator/separator.view';
import './App.global.css';

export default function App() {
  return (
    <Router>
      <div style={{ width: 300 }} className="header">
        <Provider theme={teamsTheme}>
          <Header />
        </Provider>
      </div>
      <Separator />
      <Provider theme={teamsTheme}>
        <Switch>
          <Route path="/" component={FeedList} />
        </Switch>
      </Provider>
    </Router>
  );
}
