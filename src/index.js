import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import Header from './common/Header';
import Dashboard from './dashboard';
import FrontendResource from './front-resource'
import BackendResource from './back-resource'
import Infrastructure from './infrastructure';
import InfrastructureVideo from './infrastructure-video';
import FrontendVideo from './front-video';
import BackendVideo from './back-video';
import { css, jsx } from '@emotion/react';

const Index = () => (
  <Router history={history()}>
         <Header/>
         <Route exact path="/" component={Dashboard} />
         <Route exact path="/frontend-resource" component={FrontendResource} />
         <Route exact path="/backend-resource" component={BackendResource} />
         <Route exact path="/infrastructure-resource" component={Infrastructure} />
         <Route exact path="/infrastructure-video" component={InfrastructureVideo} />
         <Route exact path="/frontend-video" component={FrontendVideo} />
         <Route exact path="/backend-video" component={BackendVideo} />
      </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);