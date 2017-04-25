import React from 'react';
import Config from '../../Config';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="copyright">Copyright &copy; 2017 {Config.server_name}. All rights reserved.</div>
                <div className="credits">Aria built by <a href="http://alanmorel.com/" target="_blank">Alan Morel</a> and <a href="http://austin-adams.us/" target="_blank">Austin Adams</a>.</div>
            </footer>
        );
    }
}

export default Footer;
