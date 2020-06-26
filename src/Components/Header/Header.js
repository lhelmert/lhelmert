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
							<a href="#" className="btn custom">
								Let's chat ☕
							</a>
						</h1>
					</button>
				</div>
				<div className="d-inline-flex flex-nowrap navbar-container">
					<div className="navbar-wrapper row justify-content-between align-items-center">
						<div className="p-2">
							<h1 id="logolike">Laura Helmert</h1>
						</div>
						<div className="navbar">
							<Navbar />
						</div>
					</div>
				</div>

				<div className="container-fluid align-items-center banner">
					<h1>Ready to reach your dream destination?</h1>
					<p>
						Online Business Management for Bloggers & creative Entrepreneurs{' '}
					</p>
				</div>
			</div>
		);
	}
}

export default Header;
