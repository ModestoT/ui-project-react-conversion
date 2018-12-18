import React, { Component } from "react";
import jumboDesk from './img/contact/contact-jumbotron.png';

class Contact extends Component {
  render() {
    return (
        <div class="container contact">
            <header>
                <div class="contact-header">
                    <h1>Contact Us</h1>
                </div>
                <img class="desktop" src={jumboDesk} alt="Contact Jumbo"/>
            </header>
        </div>
    );
  }
}
 
export default Contact;