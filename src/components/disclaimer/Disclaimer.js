import React from 'react';
import Config from '../../Config';
import Utility from '../../Utility';

import Banner from '../navigation/banner/Banner';

class Disclaimer extends React.Component {

    componentDidMount() {
        Utility.setTitle("Legal Disclaimer");
    }

    render() {
        return (
            <div>
                <Banner title="Legal Disclaimer" />
                <main className="legal-disclaimer">
                  <section className="legal-box">This is where the legal disclaimer content goes.</section>
                </main>
            </div>
        );
    }
}

export default Disclaimer;
