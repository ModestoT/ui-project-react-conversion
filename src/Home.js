import React, { Component } from "react";
import jumboDesk from './img/home/home-jumbotron.png';
class Home extends Component {
  render() {
    return (
        <div class="container home">
            <header class="intro">
                <div class="intro-text">
                    <h1  id="animate1">Integrity,<br/> Excellence,<br/> Progress.</h1>
                </div>
                <img id="animate1" class ="desktop" src={jumboDesk} alt="Home Jumbo"/>
            </header>
        </div>
    );
  }
}
 
export default Home;