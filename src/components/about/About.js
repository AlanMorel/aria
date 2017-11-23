import React from 'react';
import Config from '../../Config';
import Utility from '../../Utility';

import Banner from '../navigation/banner/Banner';

class About extends React.Component {

    componentDidMount() {
        Utility.setTitle("About");
    }

    getSubtitle() {
        return "What's this " + Config.server_name + " thing?";
    }

    render() {
        return (
            <div>
                <Banner title="About" subtitle={this.getSubtitle()} />
                <main className="about">
                  <section className="about-box">This is where the about content goes.</section>
                </main>
            </div>
        );
    }
}

export default About;
