import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
        <div class="container contact">
            <header>
                <div class="contact-header">
                    <h1>Contact Us</h1>
                </div>
                <img class="desktop" src={require("./img/contact/contact-jumbotron.png")} alt="Contact Jumbo"/>
            </header>

            <section class="contact-content">
                <div class="forms-content">
                    <h2>Get in Touch</h2>
                    <form>
                        <label for="email" class="desktop">Email Address</label><br/>
                        <label for="email" class="mobile">Email</label>
                        <input type="text" placeholder="Enter email" id="email" onclick="this.style.color='black'"/>
                        <p>We'll never share your email with anyone else.</p>

                        How many buildings do you need planned?<br/>
                        <select name="buildings">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        Provide a brief overview of your project needs:<br/>
                        <textarea name="overview" style={{width:"100%", height:136}}></textarea>
                        <br/>
                        <input type="radio" name="business" value="small" class="form-radio"/> I am a small business<br/>
                        <input type="radio" name="business" value="residential" class="form-radio"/> I am a residential owner<br/>
                        <input type="radio" name="business" value="corporation" class="form-radio"/> I am a corporation<br/>
                        <button onclick="alert('Information sent! Thank you!')">Submit</button>
                    </form>
                </div>
                <div class="places-content">
                    <h2>Where We Work</h2>

                    <h4>New York</h4>
                    <p>123 Lane<br/> 
                    Suite 100<br/> 
                    Albany, NY 12345<br/>
                    202 555 0144</p>

                    <h4>Florida</h4>
                    <p>Ocean Drive<br/>
                    Suite 201<br/>
                    Orlando, FL 22345<br/>
                    502 555 0144</p>

                    <h4>California</h4>
                    <p>Mountain Street<br/>
                    Suite 105<br/>
                    San Diego, CA 22345<br/>
                    702 555 0144</p>
                </div>
            </section>
            <section class="footer">
                    <div class="footer-contact"> 
                        <form>
                            <h4>Interested in starting a project?<br/> Let’s talk:</h4> 
                            <input type="text" value="Enter email" />
                            <p>We'll never share your email with anyone else.</p>
                        </form>
                    </div>
                    <div class="locations">
                        <h4>New York</h4>
                        <p>123 Lane<br/> 
                        Suite 100<br/> 
                        Albany, NY 12345<br/>
                        202 555 0144</p>
                    </div>
                    <div class="locations">
                        <h4>Florida</h4>
                        <p>Ocean Drive<br/>
                        Suite 201<br/>
                        Orlando, FL 22345<br/>
                        502 555 0144</p>
                    </div>
                    <div class="locations">
                        <h4>California</h4>
                        <p>Mountain Street<br/>
                        Suite 105<br/>
                        San Diego, CA 22345<br/>
                        702 555 0144</p>
                    </div>
                    <footer>
                        <p>Copyright © 2018 Smith and Jones</p>
                    </footer>
            </section>
        </div>
    );
  }
}
 
export default Contact;