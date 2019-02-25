import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import '../css/home.css'

class TitleBar extends React.Component {
  public render() {
    return (
      <div id="root">
        <AppBar position="static">
          <Toolbar>
            <Typography id="app-name" variant="h6" color="inherit">
              Know How Art
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default TitleBar
