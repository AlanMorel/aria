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
        this.openNewPost = this.openNewPost.bind(this);
        this.submitPost = this.submitPost.bind(this);
        this.newPostTitleChange = this.newPostTitleChange.bind(this);
        this.newPostCategoryChange = this.newPostCategoryChange.bind(this);
        this.newPostContentsChange = this.newPostContentsChange.bind(this);

        this.state = {
            data: {
                data: [],
                error: [],
            },
            status: -2,
            title: "",
            category: "",
            contents: ""
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
                        <NavLink to={{pathname: '/post/' + post.id}}>
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
                    {this.getNewPostDiv()}
                </div>
                <div className="control-panel-posts">{posts}</div>
            </div>
        )
    }

    openNewPost() {
        this.setState({status: -1});
    }

    newPostTitleChange(event) {
        this.setState({title: event.target.value});
    }

    newPostCategoryChange(event) {
        this.setState({category: event.target.value});
    }

    newPostContentsChange(event) {
        this.setState({contents: event.target.value});
    }

    getNewPostDiv() {
        if (this.state.status === -2){
            return <span className="new" onClick={this.openNewPost}>+ Create new Post</span>
        } else if (this.state.status === -1){
            var news = ["All", "General", "Announcement", "Update", "Event", "Community"];
            var selections = news.map(function(category) {
                return (
                    <option key={category}>{category}</option>
                );
            });
            return (
                <div className="new-post">
                    <h2>Create a new Post</h2>
                    <div className="new-post-section">
                        <label>Category: </label>
                        <select onChange={this.newPostCategoryChange}>
                            {selections}
                        </select>
                    </div>
                    <div className="new-post-section">
                        <label>Title: </label>
                        <input type="text" onChange={this.newPostTitleChange}></input>
                    </div>
                    <div className="new-post-section">
                        <label>Contents: </label>
                        <textarea onChange={this.newPostContentsChange}></textarea>
                    </div>
                    <div onClick={this.submitPost}>Submit Post</div>
                </div>
            );
        } else if (this.state.status === 0){
            return <div>Your post is being sent...</div>;
        } else {
            return <div>Your post has been created! View it <NavLink activeClassName="active" to={{pathname: '/post/' + this.state.status}}>here.</NavLink></div>;
        }
    }

    submitPost(){
        var data = {
            'title': this.state.title,
            'category': this.state.category,
            'contents': this.state.contents
        }
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
