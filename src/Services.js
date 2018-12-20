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
            <div class="tabs">
                <div class="topics"> 
                    <div class="tab" data-tab="pre-construction" >Pre-Contruction</div>
                    <div class="tab active-tab" data-tab="construction">Construction</div>
                    <div class="tab" data-tab="design build">Design Build</div>
                    <div class="tab" data-tab="sustainability">Sustainability</div>
                </div>
		    </div>
            <section class="tabs-content">
                <div class="tab-content" data-tab="pre-construction">
                    <div class="tab-text">
                        <h2>Pre-Construction</h2>
                        <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                        <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>		
                    </div>
                    <img class="desktop" src={require("./img/services/services-tab-pre-construction-img.png")} alt="Pre-Contruction"/>
                    {/* <img class="mobile" src="img\services\services-tab-mobile-pre-construction-img.png"/> */}
                </div>
                <div class="tab-content tab-selected" data-tab="construction">
                    <div class="tab-text">
                        <h2>Construction</h2>
                        <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                        <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>		
                    </div>
                <img class="desktop" src={require("./img/services/services-tab-construction-img.png")} alt="Contruction"/>
                    {/* <img class="mobile" src="img\services\services-tab-mobile-construction-img.png"/> */}
                </div>
                <div class="tab-content" data-tab="design build">
                    <div class="tab-text">
                        <h2>Design Build</h2>
                        <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                        <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>		
                    </div>
                    <img class="desktop" src={require("./img/services/services-tab-design-build-img.png")} alt="Design"/>
                    {/* <img class="mobile" src="img\services\services-tab-mobile-design-build-img.png"/> */}
                </div>
                <div class="tab-content" data-tab="sustainability">
                    <div class="tab-text">
                        <h2>Sustainability</h2>
                        <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                        <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>		
                    </div>
                    <img class="desktop" src={require("./img/services/services-tab-sustainability-img.png")} alt="Sustainability"/>
                    {/* <img class="mobile" src="img\services\services-tab-mobile-sustainability-img.png"/> */}
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
 
export default Services;