import React from 'react';
import Axios from 'axios';

import Banner from '../navigation/banner/Banner';
import Editor from '../post/editor/Editor';
import Modal from '../modal/Modal';

var options = { month: "long", day: "numeric" };

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {
                title: ""
            }
        };
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        Axios.get('post/' + id, { withCredentials: true }).then(response => {
            console.log(response.data);
            this.setState({
                post: response.data.data
            });
        });
    }

    editMode(){
        if (!this.props.match.params.mode){
            return false;
        }
        if (this.props.match.params.mode.toLowerCase() !== "edit"){
            return false;
        }
        return true;
    }

    submitPost(data, self){
        console.log(data);
        var id = self.props.match.params.id;
        Axios.patch('post/' + id, data, { withCredentials: true }).then(response => {
            console.log(response.data);
            if (response.data.success) {
                self.refs.modal.show("Success!", "You have successfully editted this post.");
                console.log("Successfully editted post.");
            } else {
                self.refs.modal.show("Server Error", response.data.error);
                console.log("Error: " + response.data.error);
            }
        });
    }

    getBody(){
        if (this.editMode()){
            if(this.state.post.title.length > 0) {
                return <Editor title="Edit Post" post={this.state.post} submit={this.submitPost} self={this}/>;
            } else {
                return <div>Data loading...</div>
            }
        } else {
            var date = new Date(this.state.post.created_at).toLocaleDateString("en-us", options);

            return (
                <div>
                    <h2 className="title">{this.state.post.title}</h2>
                    <h3 className="meta-data">Written by {this.state.post.author} on {date}</h3>
                    <div className="content" dangerouslySetInnerHTML={{ __html: this.state.post.content }} ></div>
                    <div className="views">{this.state.post.views} views</div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <Banner title="Post" subtitle="" />
                <main className="post">
                    <Modal ref="modal" />
                    <div className="container">
                        {this.getBody()}
                    </div>
                </main>
            </div>
        );
    }
}

export default Post;
