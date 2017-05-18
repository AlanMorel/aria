import React from 'react';
import Utility from '../../Utility';

import Settings from '../controlpanel/settings/Settings';
import PostManager from '../controlpanel/postmanager/PostManager';
import Banner from '../navigation/banner/Banner';

class ControlPanel extends React.Component {

    componentDidMount() {
        Utility.setTitle("Control Panel");
    }

    getAdminOptions() {
        return (
            <div>
                <Settings/>
                <PostManager/>
            </div>
        );
    }

    render() {
        var adminOptions = this.getAdminOptions();
        //var playerOptions = this.getPlayerOptions();
        return (
            <div>
                <Banner title="Control Panel" subtitle="The place to manage your account."/>
                <main className="control-panel">
                    <h1>What would you like to do today?</h1>
                    {adminOptions}
                </main>
            </div>
        );
    }
}

export default ControlPanel;
