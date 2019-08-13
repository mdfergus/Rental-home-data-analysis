import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import Root from './components/root';

render(
  <Router>
    <Root />
  </Router>,
  document.getElementById('main')
);