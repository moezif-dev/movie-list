import React from 'react';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { store } from './store';
import { NavigationBar } from './components';
import { ContentView, MediaView, SearchView } from './views';
import './app.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div id="app">
          <NavigationBar />
            <div className="app-container grid-container">
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/my-content">
                <ContentView />
              </Route>
              <Route path="/media/:id">
                <MediaView />
              </Route>
              <Route path="/page/:value">
                <SearchView />
              </Route>
              <Route path="/">
                <SearchView />
              </Route>
            </Switch>
            </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
