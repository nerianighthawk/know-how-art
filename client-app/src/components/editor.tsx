import * as React from 'react';

import TextField from '@material-ui/core/TextField';
import * as marked from 'marked';

class Editor extends React.Component {

  public render() {
    const multiline = true
    return (
      <div>
      <TextField multiline={multiline} onChange={this.hundleChange}/>
      <div id="preview"/>
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
