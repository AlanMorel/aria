import React from 'react';
import { NavLink } from 'react-router-dom';
import Config from '../../Config';
import Axios from 'axios';

import Banner from '../navigation/banner/Banner';

var options = {
    month: "short",
    day: "numeric"
};

class ControlPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                data: [],
                error: []
            }
        };
    }

    componentDidMount() {
        Config.setTitle("Control Panel");
        Axios.get(Config.base_url + `news`).then(response => {
            console.log(response.data);
            this.setState({data: response.data});
        });
    }

    getPosts() {
        if (this.state.data.success === false){
            return (
                <div className="error">{this.state.data.error}</div>
            );
        }

        var posts = this.state.data.data.map(function(post) {
            var date = new Date(post.created_at).toLocaleDateString("en-us", options);
            return (
                    <div className="control-panel-post" key={post.id}>
                        <NavLink to={{pathname: '/controlpanel/' + post.id}}>
                            <span className="title">{post.title}</span>
                        </NavLink>
                        <span className="author">{post.author}</span>
                        <span className="date">{date}</span>
                        <span className="delete">Delete</span>
                    </div>
                );
        });

        return (
            <div>
                <h2>Community Posts</h2>
                <div>
                    <NavLink to={{pathname: '/controlpanel/new'}}>
                        <span className="new">+ Create new Post</span>
                    </NavLink>
                </div>
                <div className="control-panel-posts">{posts}</div>
            </div>
        )
    }

    getAlert() {
        return (
            <div>
                <h2>Update Alert</h2>
                <div className="control-panel-alert">
                    <input type="text" placeholder="Enter an alert"></input>
                    <button onClick={this.logout}>Update Alert</button>
                </div>
            </div>
        );
    }

    getAdminOptions() {
        var alert = this.getAlert();
        var posts = this.getPosts();
        return (
            <div>
                <div>{alert}</div>
                <div>{posts}</div>
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
