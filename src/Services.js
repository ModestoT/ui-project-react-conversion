import React, { Component } from "react";
import jumboDesk from './img/services/services-jumbotron.png';

class Services extends Component {
  render() {
    return (
        <div class="container services">
            <header>
                <div class="services header-text">
                    <h1>Services</h1>
                </div>
                <img class="desktop" src={jumboDesk} alt="Services Jumbo"/>
                <p>Services include: completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
            </header>
        </div>
    );
  }
}
 
export default Services;