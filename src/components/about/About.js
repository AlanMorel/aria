import React from 'react';
import Config from '../../Config';
import Banner from '../navigation/banner/Banner';

class About extends React.Component {
    render() {
        return (
            <div>
                <Banner title="About"></Banner>
                <main className="about">{Config.about_content}</main>
            </div>
        );
    }
}

export default About;
