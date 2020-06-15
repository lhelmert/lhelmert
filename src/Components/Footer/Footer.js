import React from 'react';

import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
        <div className="footer">
            <div className="links">
                <a href="#"><i className="fab fa-facebook-square"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter-square"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <p>This website was coded with <i className="fas fa-heart"></i> at Laurahelmert.com.</p>
            </div>
              <span className="tagline">copyright laurahelmert.com</span>
        </div>
         )
    }
}

export default Footer;