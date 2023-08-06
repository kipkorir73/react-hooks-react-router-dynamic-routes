import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/movies">
        <App />
      </Route>
      <Route exact path="/">
        <div>Home</div>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
