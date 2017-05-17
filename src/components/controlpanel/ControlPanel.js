import React from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import Config from '../../Config';

import Banner from '../navigation/banner/Banner';
import Editor from '../post/editor/Editor';

var options = {
    month: "short",
    day: "numeric"
};

var statusCode = {
    HIDE: -2,
    SHOW: -1,
    SENDING: 0
}

class ControlPanel extends React.Component {

    constructor(props) {
        super(props);
        this.openNewPost = this.openNewPost.bind(this);
        this.alertChange = this.alertChange.bind(this);

        this.state = {
            data: {
                data: [],
                error: [],
            },
            status: statusCode.HIDE,
            alert: Config.alert
        };
    }

    componentDidMount() {
        Config.setTitle("Control Panel");
        Axios.get(Config.base_url + `news`).then(response => {
            console.log(response.data);
            this.setState({data: response.data});
        });
    }

    deletePost(id) {
        console.log("Deleting post :" + id);
        Axios.delete('/post', {id: id}).then(response => {
            console.log(response.data);
            //TODO remove post from state if successful
        });
    }

    getPosts() {
        if (this.state.data.success === false){
            return (
                <div className="error">{this.state.data.error}</div>
            );
        }

        var self = this;
        var posts = this.state.data.data.map(function(post) {
            var date = new Date(post.created_at).toLocaleDateString("en-us", options);
            return (
                    <div className="control-panel-post" key={post.id}>
                        <NavLink to={{pathname: '/post/' + post.id}}>
                            <span className="title">{post.title}</span>
                        </NavLink>
                        <span className="author">{post.author}</span>
                        <span className="date">{date}</span>
                        <span className="delete" onClick={() => self.deletePost(post.id)}>Delete</span>
                    </div>
                );
        });

        return (
            <div>
                <h2>Community Posts</h2>
                <div>
                    {this.getNewPostDiv()}
                </div>
                <div className="control-panel-posts">{posts}</div>
            </div>
        )
    }

    openNewPost() {
        this.setState({status: statusCode.SHOW});
    }

    alertChange(event) {
        this.setState({alert: event.target.value});
    }

    getNewPostDiv() {
        if (this.state.status === statusCode.HIDE){
            return <span className="new" onClick={this.openNewPost}>+ Create new Post</span>
        } else if (this.state.status === -1){
            var post = {
                title: "",
                type: "",
                content: ""
            }
            return <Editor title="Create new Post" post={post} submit={this.submitPost} />;
        } else if (this.state.status === statusCode.SENDING){
            return <div>Your post is being sent...</div>;
        } else {
            return <div>Your post has been created! View it <NavLink activeClassName="active" to={{pathname: '/post/' + this.state.status}}>here.</NavLink></div>;
        }
    }

    updateAlert(){
        console.log("Updating alert");
        //TODO send request and handle response
    }

    submitPost(data){
        console.log(data);
        Axios.post(Config.base_url + `post`, data, { withCredentials: true }).then(response => {
            console.log(response.data);
            if (response.data.success){
                console.log("Successfully posted post.");
            } else {
                console.log("Error: " + response.data.error);
            }
        });
    }

    getAlert() {
        return (
            <div>
                <h2>Update Alert</h2>
                <div className="control-panel-alert">
                    <input type="text" placeholder="Enter an alert" value={this.state.alert} onChange={this.alertChange}></input>
                    <button onClick={this.updateAlert} className="update-button">Update Alert</button>
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
