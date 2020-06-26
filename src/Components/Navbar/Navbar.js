import React from 'react';
import { Link } from 'react-router-dom';
import * as external from '../../config/external.json';

class Navbar extends React.Component {
	render() {
		const pages = ['Home', 'About', 'Services', 'Vlog'];
		const navLinks = pages.map((page) => {
			return (
				(page === 'Vlog' && (
					<a key={page} href={external.links.vlog} target="_blank">
						{page}
					</a>
				)) || (
					<Link key={page} to={page}>
						{page}
					</Link>
				)
			);
		});

		return <nav>{navLinks}</nav>;
	}
}

export default Navbar;
