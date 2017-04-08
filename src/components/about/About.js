import React from 'react';
import Config from '../../Config';
import Banner from '../navigation/banner/Banner';

class About extends React.Component {
    render() {
        return (
            <div>
                <Banner title="About"></Banner>
                <div>{Config.about_content}</div>
            </div>
        );
    }
}

export default About;
