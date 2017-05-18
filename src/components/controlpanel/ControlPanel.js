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

    getBody(){
        if (this.props.status.logged_in){
            var adminOptions = this.getAdminOptions();
            return (
                <div>
                    <h1>What would you like to do today?</h1>
                    {adminOptions}
                </div>
            );
        } else {
            return <div>Please log in to access the control panel.</div>;
        }
    }

    render() {
        return (
            <div>
                <Banner title="Control Panel" subtitle="The place to manage your account."/>
                <main className="control-panel">
                    {this.getBody()}
                </main>
            </div>
        );
    }
}

export default ControlPanel;
