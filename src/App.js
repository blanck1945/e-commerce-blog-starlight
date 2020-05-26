import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

//Components imports
import NavBar from './Templates/NavBar';
import MainNav from './Templates/MainNav';
import Footer from './Templates/Footer';
import HomePage from './Components/Home/HomePage';

//SCSS imports
import "./Styles/Global.scss"
import ShopHome from './Components/Shop/ShopHome';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <MainNav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopHome} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
