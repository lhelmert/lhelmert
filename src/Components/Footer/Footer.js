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
					<a href="www.facebook.com/lhelmert.certifiedobm">
						<FontAwesomeIcon icon={faFacebookSquare} />
					</a>
					<a href="https://www.instagram.com/laurahelmert_obm/">
						<FontAwesomeIcon icon={faInstagramSquare} />
					</a>
					<a href="https://twitter.com/HelmertLaura">
						<FontAwesomeIcon icon={faTwitterSquare} />
					</a>
					<a href="www.linkedin.com/in/laurahelmertcertifiedobm">
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a href="https://www.youtube.com/channel/UCc9jvnl2an3sW3ndvaoT1LA?view_as=subscriber">
						<FontAwesomeIcon icon={faYoutubeSquare} />
					</a>
					<p>
						This website was coded with ♡ at Laurahelmert.com.
					</p>
				</div>
			</div>
		);
	}
}

export default Footer;
