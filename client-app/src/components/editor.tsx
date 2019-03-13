import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as marked from 'marked';

interface Iprops extends RouteComponentProps<{}> {}

const Editor = (props: Iprops) => {
  return (
    <div>
      <div>{props.location.search}</div>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={6}>
          <TextField multiline={true} variant="outlined" rows="30" onChange={handleChange}/>
        </Grid>
        <Grid item={true} xs={6}>
          <div id="preview"/>
        </Grid>
      </Grid>
    </div>
  )
}

const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  const input = event.currentTarget;
  document!.getElementById("preview")!.innerHTML = marked(input.value);
  event.preventDefault();
}

export default Editor
