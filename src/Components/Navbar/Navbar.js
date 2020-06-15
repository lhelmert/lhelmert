import React from 'react';

class Navbar extends React.Component {
	render() {
		const pages = ['home', 'about', 'services', 'vlog'];
		const navLinks = pages.map((page) => {
			return <a href={'../' + page}>{page}</a>;
		});

		return <nav>{navLinks}</nav>;
	}
}

export default Navbar;
