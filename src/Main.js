import React, { Component } from "react";
import hamburger from './img/nav-hamburger.png';
 
class Main extends Component {
  render() {
    return (
        <div class="navigation">
            <h1>S&J</h1>
            <img class="menu-button" src={hamburger} alt="Hamburger"/>
            <div class="menu-content menu-hidden">
                <div class="menu">
                    <a href="index.html">Home</a>
                    <a href="services.html">Services</a>
                    <a href="contact.html">Contact</a>
                </div>
            </div>
	    </div>
    );
  }
}
 
export default Main;