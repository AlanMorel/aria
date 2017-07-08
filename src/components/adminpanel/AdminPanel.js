import React from 'react';
import Utility from '../../Utility';

import Settings from '../adminpanel/settings/Settings';
import PostManager from '../adminpanel/postmanager/PostManager';
import Banner from '../navigation/banner/Banner';

class AdminPanel extends React.Component {

    componentDidMount() {
        Utility.setTitle("Admin Panel");
    }

    getAdminOptions() {
        return (
            <div>
                <Settings/>
                <PostManager/>
            </div>
        );
    }

    getBody() {
        if (this.props.status.logged_in) {
            return (
                <div>
                    <h1>What would you like to do today?</h1>
                    {this.getAdminOptions()}
                </div>
            );
        } else {
            return <div>Please log in to access the admin panel.</div>;
        }
    }

    render() {
        return (
            <div>
                <Banner title="Admin Panel" subtitle="The place to manage your website."/>
                <main className="admin-panel">
                    {this.getBody()}
                </main>
            </div>
        );
    }
}

export default AdminPanel;
