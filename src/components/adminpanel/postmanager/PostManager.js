import React from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

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
            posts: [],
            status: statusCode.HIDE
        };
    }

    componentDidMount() {
        this.reloadPosts();
    }

    reloadPosts(){
        Axios.get('news/all').then(response => {
            console.log(response.data);
            this.setState({posts: response.data});
        });
    }

    deletePost(id, self) {
        console.log("Deleting post :" + id);
        Axios.delete('post/' + id).then(response => {
            console.log(response.data);
            if (response.data.success){
                self.refs.modal.show("Success!", "You have successfully deleted the post.");
                self.setState({status: statusCode.HIDE});
                self.reloadPosts();
                console.log("Successfully deleted post.");
            } else {
                self.refs.modal.show("Server Error", response.data.error);
                console.log("Error: " + response.data.error);
            }
        });
    }

    openNewPost() {
        this.setState({status: statusCode.SHOW});
    }

    getNewPostDiv() {
        if (this.state.status === statusCode.HIDE) {
            return <span className="new" onClick={this.openNewPost}>+ Create new Post</span>
        } else if (this.state.status === statusCode.SHOW) {
            var post = {
                title: "",
                type: "General",
                content: ""
            }
            return <Editor title="Create new Post" post={post} submit={this.submitPost} self={this}/>;
        } else if (this.state.status === statusCode.SENDING) {
            return <div>Your post is being sent...</div>;
        } else {
            return <div>Your post has been created! View it <NavLink activeClassName="active" to={{pathname: '/post/' + this.state.status}}>here.</NavLink></div>;
        }
    }

    submitPost(data, self) {
        console.log(data);
        Axios.post('post', data).then(response => {
            console.log(response.data);
            if (response.data.success){
                self.refs.modal.show("Success!", "You have successfully created a new post.");
                self.setState({status: statusCode.HIDE});
                self.reloadPosts();
                console.log("Successfully posted post.");
            } else {
                self.refs.modal.show("Server Error", response.data.error);
                console.log("Error: " + response.data.error);
            }
        });
    }

    getBody() {
        var self = this;
        var posts = this.state.posts.map(function(post) {
            var date = new Date(post.created_at).toLocaleDateString("en-us", options);
            return (
                <div className="admin-panel-post" key={post.id}>
                    <NavLink to={{pathname: '/post/' + post.id + '/edit'}}>
                        <span className="title">{post.title}</span>
                    </NavLink>
                    <span className="author">{post.author}</span>
                    <span className="date">{date}</span>
                    <span className="delete" onClick={() => self.deletePost(post.id, self)}>Delete</span>
                </div>
            );
        });

        return (
            <div>
                <Modal ref="modal" />
                <h2>Community Posts</h2>
                {this.getNewPostDiv()}
                <div className="admin-panel-posts">{posts}</div>
            </div>
        )
    }

    render() {
        return (
            <div className="post-manager">{this.getBody()}</div>
        );
    }
}

export default PostManager;
