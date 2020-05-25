import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

//Components imports
import NavBar from './Templates/NavBar';

//SCSS imports
import "./Styles/Global.scss"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
