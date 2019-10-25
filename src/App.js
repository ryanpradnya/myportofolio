import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import home from './components/pages/home'
import projects from './components/pages/projects'
import Navbar from './components/layout/Navbar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/projects" component={projects} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
