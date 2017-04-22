import React from 'react';
import Config from '../../Config';

import Banner from '../navigation/banner/Banner';

class About extends React.Component {

    componentDidMount() {
        Config.setTitle("About");
    }
    
    render() {
        return (
            <div>
                <Banner title="About" subtitle={"What's this " + Config.server_name + " thing?"}></Banner>
                <main className="about">This is where the about content goes.</main>
            </div>
        );
    }
}

export default About;
