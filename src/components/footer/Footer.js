import React from 'react';
import Config from '../../Config';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="copyright">Copyright &copy; 2017 {Config.server_name}. All rights reserved.</div>
                <div className="credits">Aria built by <a href="https://alanmorel.com/" target="_blank" rel="noopener noreferrer">Alan Morel</a> and <a href="http://austinradams.com/" target="_blank" rel="noopener noreferrer">Austin Adams</a>.</div>
                <div className="legal-disclaimer-button">
                    <Link to={{pathname: '/disclaimer'}}>Legal Disclaimer</Link>
                </div>
            </footer>
        );
    }
}

export default Footer;
