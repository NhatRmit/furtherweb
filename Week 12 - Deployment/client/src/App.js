import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Product from './components/Product';
import Menu from './components/Menu';


function App() {

  return (
    <div class="container">
      <Router>
        <div>      
          <Menu/>
          
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
             
            </Route>
            <Route path="/about">
              
            </Route>
            <Route path="/product">
              <Product />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
