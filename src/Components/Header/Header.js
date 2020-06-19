import React from 'react';

import logo from '../../assets/images/logo.png';

import Navbar from '../Navbar/Navbar';
import './Header.css';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-custom">
					<div className="upper-bar">
						<button className="call-button" onClick={this.props.switchSidebar}>
							<h1 className="upper-button">
								<a href="#" className="btn custom" >Let's chat ☕</a>
							</h1>
						</button>
					</div>
					<div class="container">
						<div className ="d-flex justify-content-between align-items-center">
							<div className="p-2">
								<img
										src={logo}
										width="400" height="125" 
										className="logo"
										alt="Logo"
							/> 
							</div>
							<div className="navbar">
								<Navbar />
							</div>
						</div>
					</div>
					

				<div className="banner">
					<h1>
					Ready to reach your dream destination?</h1>
					<p>Online Business Management for Bloggers & Creative Entrepreneurs </p>
				</div>
			</div>	
		);
	}
}

export default Header;
