import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// Featured
import Index from './views/Index';
import Timeline from './views/Timeline';
import SpecialLady from './views/SpecialLady';
import MyPieces from './views/MyPieces';
import Photos from './views/Photos';

import NotFound from './views/NotFound';

// All of our CSS
import './static/css/main.scss';

ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/speciallady" component={SpecialLady} />
      <Route path="/mypieces" component={MyPieces} />
      <Route path="/photos" component={Photos} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
