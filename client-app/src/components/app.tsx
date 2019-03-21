import * as React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Editor from '../components/editor';
import TitleBar from '../views/title-bar';

import { CognitoUserPool } from 'amazon-cognito-identity-js';

const App = () => {
  const data = {
    ClientId: '122koppabv8dql25kskc2kc2ot',
    UserPoolId: 'us-east-1_BcdBiPzEs',
  };
  const userPool = new CognitoUserPool(data);
  const cognitoUser = userPool.getCurrentUser();

  console.log(cognitoUser);

  if (cognitoUser != null) {
    cognitoUser.getSession((err: string, session: any) => {
      if (err) {
        alert(err);
        return;
      }
      console.log('session validity: ' + session.isValid());
    });
  }

  return (
    <Router>
      <div>
        <TitleBar />
        <Route path='/editor' component={Editor} />
      </div>
    </Router>
  )
}

export default App;
