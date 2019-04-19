import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css';

import App2 from "./pages/App2";

class App extends Component {
  render() {
    return (

      <Router>
          <Route path="/pagina1" component={App2} />
          

        </Router>

    );
  }
}

export default App;
