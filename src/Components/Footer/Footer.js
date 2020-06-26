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
					<a
						href="https://www.facebook.com/lhelmert.certifiedobm"
						target="_blank"
					>
						<FontAwesomeIcon icon={faFacebookSquare} />
					</a>
					<a href="https://www.instagram.com/laurahelmert_obm/" target="_blank">
						<FontAwesomeIcon icon={faInstagramSquare} />
					</a>
					<a href="https://twitter.com/HelmertLaura" target="_blank">
						<FontAwesomeIcon icon={faTwitterSquare} />
					</a>
					<a
						href="https://www.linkedin.com/in/laurahelmertcertifiedobm"
						target="_blank"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a
						href="https://www.youtube.com/channel/UCc9jvnl2an3sW3ndvaoT1LA?view_as=subscriber"
						target="_blank"
					>
						<FontAwesomeIcon icon={faYoutubeSquare} />
					</a>
					<p>This website was coded with ♡ at Laurahelmert.com.</p>
				</div>
			</div>
		);
	}
}

export default Footer;
