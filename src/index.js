import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import './tail.css';
import Header from './common/Header';
import Dashboard from './dashboard';
import FrontendResource from './front-resource'
import BackendResource from './back-resource'
import Infrastructure from './infrastructure';
import FrontendVideo from './front-video';

const Index = () => (
  <Router history={history()}>
    <div className="flex flex-col min-h-screen">
         <Header />
         <Route exact path="/" component={Dashboard} />
         <Route exact path="/frontend-resource" component={FrontendResource} />
         <Route exact path="/backend-resource" component={BackendResource} />
         <Route exact path="/infrastructure-resource" component={Infrastructure} />
         <Route exact path="/frontend-video" component={FrontendVideo} />
    </div>
      </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);