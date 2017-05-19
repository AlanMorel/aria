import React from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import Config from '../../../Config';

import Editor from '../../post/editor/Editor';
import Modal from '../../modal/Modal';

var options = {
    month: "short",
    day: "numeric"
};

var statusCode = {
    HIDE: -2,
    SHOW: -1,
    SENDING: 0
}

class PostManager extends React.Component {

    constructor(props) {
        super(props);
        this.openNewPost = this.openNewPost.bind(this);

        this.state = {
            data: {
                data: [],
                error: [],
            },
            status: statusCode.HIDE
        };
    }

    componentDidMount() {
        Axios.get(Config.base_url + `news`).then(response => {
            console.log(response.data);
            this.setState({data: response.data});
        });
    }

    deletePost(id) {
        console.log("Deleting post :" + id);
        Axios.delete(Config.base_url + '/post/' + id,).then(response => {
            console.log(response.data);
            //TODO remove post from state if successful
        });
    }

    openNewPost() {
        this.setState({status: statusCode.SHOW});
        this.refs.modal.show("Hi there!", "You are now about to create a post!");
    }

    getNewPostDiv() {
        if (this.state.status === statusCode.HIDE){
            return <span className="new" onClick={this.openNewPost}>+ Create new Post</span>
        } else if (this.state.status === statusCode.SHOW){
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

    submitPost(data){
        console.log(data);
        Axios.post(Config.base_url + `post`, data, { withCredentials: true }).then(response => {
            console.log(response.data);
            if (response.data.success){
                this.setState({status: statusCode.HIDE});
                this.refs.modal.show("Success!", "You have successfully created a new post.");
                //TODO append post to array
                console.log("Successfully posted post.");
            } else {
                console.log("Error: " + response.data.error);
            }
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
                {this.getNewPostDiv()}
                <Modal ref="modal" />
                <div className="control-panel-posts">{posts}</div>
            </div>
        )
    }

    render() {
        return (
            <div className="post-manager">{this.getPosts()}</div>
        );
    }
}

export default PostManager;
