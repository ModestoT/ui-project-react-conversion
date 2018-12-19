import React, { Component } from "react";
import hamburger from './img/nav-hamburger.png';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Services from "./Services";
  import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <div class="navigation">
                    <h1>S&J</h1>
                    <img class="menu-button" src={hamburger} alt="Hamburger"/>
                    <div class="menu-content menu-hidden">
                        <div class="menu">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;