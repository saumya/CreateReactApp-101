import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
//
import { Router, Route, IndexRoute, hashHistory, browserHistory, useRouterHistory } from 'react-router'

// Refer : https://github.com/saumya/ReactRouter-102/blob/master/js/app.js
// IndexRoute : the dafault route or the default view to render
var routes = (
              <Route path="/" component={App}>
                <IndexRoute component={App} />
                <Route path="see" component={App} />
                <Route path="add" component={App} />
              </Route>
            );
//
ReactDOM.render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('root')
);
