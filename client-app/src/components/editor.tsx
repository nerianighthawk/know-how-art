import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom'

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles/'
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as marked from 'marked';

interface Iprops extends RouteComponentProps<{}> { }

interface IState {
  text: string,
  title: string,
}

const styles = (theme: Theme) => {
  return createStyles({
    grid: {
      margin: 'auto',
      width: '90%',
    },
    textarea: {
      hight: 'auto',
      width: '100%',
    },
    title: {
      margin: 'auto',
      width: '100%',
    }
  });
};

type EditorProps = Iprops & WithStyles<typeof styles>;

class Editor extends React.Component<EditorProps, IState> {

  public state: IState = {
    text: '',
    title: '',
  }

  public handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const input = event.currentTarget;
    this.setState({ [input.id]: input.value } as Pick<IState, keyof IState>);
    if(input.id === 'text'){
      document!.getElementById("preview")!.innerHTML = marked(input.value);
    }
    event.preventDefault();
  }

  public render() {
    const { classes } = this.props;
    const { text, title } = this.state;

    return (
      <div>
        <Grid container={true} spacing={24} className={classes.grid}>
          <Grid item={true} xs={12}>
            <TextField
              id="title"
              variant="outlined"
              label="title"
              value={title}
              className={classes.title}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item={true} xs={6}>
            <TextField
              id="text"
              multiline={true}
              variant="outlined"
              value={text}
              rows="25"
              rowsMax="25"
              className={classes.textarea}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item={true} xs={6}>
            <div id="preview" />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Editor);
