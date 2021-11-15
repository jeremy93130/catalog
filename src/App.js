import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './Pages/Home';
import List from './Pages/List';
import Error404 from './Pages/Error404';
import Nav from "./Components/Nav"



import './App.css'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="navBar">
          <Nav />
        </div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/list/:id" component={List}></Route>
          <Route path="*" component={Error404}></Route>
        </Switch>
      </BrowserRouter >
    );
  }
}

export default App;
