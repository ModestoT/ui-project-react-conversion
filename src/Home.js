import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
        <div class="container home">
            <header class="intro">
                <div class="intro-text">
                    <h1  id="animate1">Integrity,<br/> Excellence,<br/> Progress.</h1>
                </div>
                <img id="animate1" class ="desktop" src={require("./img/home/home-jumbotron.png")} alt="Home Jumbo"/>
				<img class ="mobile" src={require("./img/home/home-mobile-jumbotron.png")} alt="Home Jumbo"/>
            </header>

			<section class="main-content">
				<div class="top-content">
					<div class="top-content" id="animate2">	
						<div class="info">
							<h3>Smith & Jones Architects</h3>
							<div id="trigger1"></div>
							<p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem</p>
							<button>Learn More</button>
						</div>
						<img class="pencil desktop" src={require("./img/home/home-img-1.png")} alt="Pencil"/>
					</div>
					<img class="pencil mobile" src={require("./img/home/home-mobile-img-1.png")} alt="Pencil"/>
					<img class="view mobile" src={require("./img/home/home-mobile-img-2.png")} alt="Desktop"/>
					<div class="top-content" id="animate3">
						<img class="view desktop" src={require("./img/home/home-img-2.png")} alt="Desktop"/>
						<div class="info">
							<h3>Futuristic Designs</h3>
							<p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem</p>		
							<div id="trigger2"></div>
							<button>View Designs</button>	
						</div>
					</div>
				</div>
				<div id="trigger3"></div>
				<div class="bottom-content">
					<h3 id="animate4">Recent Projects</h3>
					<div class="content">
						<h2 id="animate4" class="villa">THE VILLAS</h2>
						<img id="animate4" class="desktop" src={require("./img/home/home-villas-img.png")} alt="Villa"/>
						<img class="mobile" src={require("./img/home/home-mobile-villas-img.png")} alt="Villa"/>
						<p id="animate4">The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
						<p id="animate4">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
						<div id="trigger4"></div>
					</div>
					<div class="content">
						<h2 class="outskirts" id="animate5">OUTSKIRTS</h2>
						<img id="animate5" class="desktop" src={require("./img/home/home-outskirts-img.png")} alt="Outskirts"/>
						<img class="mobile"	src={require("./img/home/home-mobile-outskirts-img.png")} alt="Outskirts"/>
						<p id="animate5">The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
						<p id="animate5">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
						<div id="trigger5"></div>
					</div>
					<div class="content">
						<h2 class="the-block" id="animate6">THE BLOCKS</h2>
						<img id="animate6" class="desktop" src={require("./img/home/home-the-blocks-img.png")} alt="The Blocks"/>
						<img class="mobile" src={require("./img/home/home-mobile-the-blocks-img.png")} alt="The Blocks"/>
						<p>The Blocks are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
						<div id="trigger6"></div>
						<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. </p>
					</div>
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
 
export default Home;