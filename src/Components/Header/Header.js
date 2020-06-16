import React from 'react';

import Navbar from '../Navbar/Navbar';
import './Header.css';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-header">
				<nav className="main-header">
					<div class="upper-bar">
						<button class="call-button" onClick={this.props.switchSidebar}>
							<h1 class="upper-button">
								<a href="#">Book a call</a>
							</h1>
						</button>
					</div>
					{/* <ul className="navbar">			
					<li><a target="_blank" href="./Home">Home</a></li>
					<li><a target="_blank" href="./About">About</a></li>
					<li>Logo</li>
					<li><a target="_blank" href="./Services">Services</a></li>
					<li><a target="_blank" href="./Vlog">Vlog</a></li>
       	  	</ul> */}
					<Navbar />
				</nav>
				<div className="container-banner">
					<div className="banner">
						<h1>
							Please lean back, your business is thriving in proactive mode.{' '}
							<br /> So what is the vision for the future of your creative biz?
						</h1>
						<p> Better business systems for larger milestones </p>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
// ReactDOM.render(
// 	<Header />,
// 	document.getElementById('app')
// );
