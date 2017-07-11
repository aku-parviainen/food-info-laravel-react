import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createRoutes from './routes';
import axios from 'axios';

const ROUTES = createRoutes();

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  getLoggedInUser() {
    axios.get('/api/user').then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      ROUTES
    );
  }
}

export default App;

// Render app if element with an id of 'app' is found on page
if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app')
  );
}