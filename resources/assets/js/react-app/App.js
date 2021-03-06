import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createRoutes from './routes';

const ROUTES = createRoutes();

class App extends Component {

  constructor(props) {
    super(props);
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