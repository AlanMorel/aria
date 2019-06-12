import React from 'react';
import Config from '../../Config';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="legal-disclaimer-button">
                    <Link to={{pathname: '/disclaimer'}}>Legal Disclaimer</Link>
                </div>
                <div className="footer-notes">{Config.server_name + " v" + Config.version + " MapleStory Private Server"}</div>
                {/*
                    NOTICE: This software, Aria, is licensed and distributed under the MIT License.

                    By choosing to use Aria, you have fully agreed to the terms of the MIT license in its entirety. The MIT license
                    allows you to add your own additional copyright if you desire, but it does NOT allow you to remove any existing
                    copyright. For more information about your rights, please read the LICENSE file that came with Aria. If you have
                    any questions, please contact me or visit https://www.tawesoft.co.uk/kb/article/mit-license-faq

                    Thank you and enjoy!
                */}
                <div className="copyright">Aria Copyright &copy; 2019 <a href="https://alanmorel.com/" target="_blank">Alan Morel</a> and <a href="http://austinradams.com/" target="_blank">Austin Adams</a>. All rights reserved.</div>
            </footer>
        );
    }
}

export default Footer;
