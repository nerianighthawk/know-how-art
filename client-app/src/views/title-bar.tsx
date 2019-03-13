import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import '../css/home.css'

const TitleBar = () => (
  <div id="root">
    <AppBar position="static">
      <Toolbar>
        <Typography id="app-name" variant="h6" color="inherit">
          Know How Art
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

export default TitleBar
