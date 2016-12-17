'use strict';

import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import {Home} from '../pages/Home';
import {Popular} from '../pages/Popular';
import {Search} from '../pages/Search';
import {About} from '../pages/About';
import {NotFoundRoute} from '../pages/NotFoundRoute';

import Container from '../components/Container';

export default class Routes extends Component {
  render () {
    return (
      <Router history={ browserHistory }>
        <Route path='/' component={ Container }>
          <IndexRoute component={ Home } />
          <Route path='/popular' component={ Popular } />
          <Route path='/search' component={ Search } />
          <Route path='/about' component={ About } />
          <Route path='*' component={ NotFoundRoute } />
        </Route>
      </Router>
    )
  }
}