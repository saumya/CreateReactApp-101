import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
//
import IndexComponent from './components/IndexComponent.react';
import CompOne from './components/CompOne.react';
import CompTwo from './components/CompTwo.react';
import CompThree from './components/CompThree.react';
import CompFour from './components/CompFour.react';
//
import CompThreeOne from './components/CompThreeOne.react';
import CompThreeTwo from './components/CompThreeTwo.react';
//
import { Router, Route, IndexRoute, hashHistory, browserHistory, useRouterHistory } from 'react-router'

// Refer : https://github.com/saumya/ReactRouter-102/blob/master/js/app.js
// IndexRoute : the dafault route or the default view to render
var routes = (
              <Route path="/" component={App}>
                <IndexRoute component={IndexComponent} />
                <Route path="one" component={CompOne} />
                <Route path="two" component={CompTwo} />
                <Route path="three" component={CompThree}>
                  <Route path="1" component={CompThreeOne} />
                  <Route path="2" component={CompThreeTwo} />
                </ Route>
                <Route path="four" component={CompFour} />
              </Route>
            );
//
ReactDOM.render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('root')
);
