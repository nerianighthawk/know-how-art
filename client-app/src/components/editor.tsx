import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as marked from 'marked';

class Editor extends React.Component {

  public render() {
    const multiline = true
    return (
      <div>
      <Grid container={true} spacing={24}>
      <Grid item={true} xs={6}>
      <TextField multiline={multiline} variant="outlined" rows="30" onChange={this.hundleChange}/>
      </Grid>
      <Grid item={true} xs={6}>
      <div id="preview"/>
      </Grid>
      </Grid>
      </div>
    )
  }

  private hundleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>){
    const input = event.currentTarget;
    document!.getElementById("preview")!.innerHTML = marked(input.value);
    event.preventDefault();
  }
}

export default Editor
