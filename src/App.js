import React, { Component } from 'react';
import {Router} from "react-router-dom";
import Routes from "./Routes";
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">i18next App</header>
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
