import React from 'react';
import Config from '../../Config';

import Banner from '../navigation/banner/Banner';

class ControlPanel extends React.Component {

    componentDidMount() {
        Config.setTitle("Control Panel");
    }

    getOptions() {
        var options = [];

        return options;
    }

    render() {
        var options = this.getOptions();
        return (
            <div>
                <Banner title="Control Panel" subtitle="The place to manage your account."/>
                <main className="control-panel">
                    <h1>What would you like to do today?</h1>
                    {options}
                </main>
            </div>
        );
    }
}

export default ControlPanel;
