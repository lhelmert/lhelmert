import {
	faFacebookSquare,
	faInstagramSquare,
	faLinkedin,
	faTwitterSquare,
	faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="links">
					<a href="#">
						<FontAwesomeIcon icon={faFacebookSquare} />
					</a>
					<a href="#">
						<FontAwesomeIcon icon={faInstagramSquare} />
					</a>
					<a href="#">
						<FontAwesomeIcon icon={faTwitterSquare} />
					</a>
					<a href="#">
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a href="#">
						<FontAwesomeIcon icon={faYoutubeSquare} />
					</a>
					<p>
						This website was coded with <i className="fas fa-heart"></i> at
						Laurahelmert.com.
					</p>
				</div>
				<span className="tagline">copyright laurahelmert.com</span>
			</div>
		);
	}
}

export default Footer;
