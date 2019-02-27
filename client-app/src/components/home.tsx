import * as React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Editor from '../components/editor';
import TitleBar from '../views/title-bar';

class Home extends React.Component {
  componentWillMount = () => {
    const params = new URLSearchParams(this.props.location.search);
    this.props.setKeywordAndOrder(params.get('code'));
  };
  componentWillReceiveProps = nextProps => {
    // componentWillReceivePropsが無限に呼び出されるのを防ぐ
    if (nextProps.location !== this.props.location) {
      const params = new URLSearchParams(nextProps.location.search);
      const code = params.get('code');
      this.props.setKeywordAndOrder(code);
    }
  };
  public render() {
    console.log(code);
    return (
      <Router>
        <div>
          <TitleBar />
          <Route path='/editor' component={Editor}/>
        </div>
      </Router>
    )
  }
}

export default Home;
