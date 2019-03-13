import * as React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Editor from '../components/editor';
import TitleBar from '../views/title-bar';

const App = () => (
  <Router>
    <div>
      <TitleBar />
      <Route path='/editor' component={Editor}/>
    </div>
  </Router>
)

export default App;
