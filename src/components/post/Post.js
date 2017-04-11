import React from 'react';
import Axios from 'axios';
import Config from '../../Config';

import Banner from '../navigation/banner/Banner';

var options = { month: "long", day: "numeric" };

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        Axios.get(Config.base_url + `post/` + id).then(response => {
            this.setState({post: response.data});
        });
    }

    render() {
        var post = this.state.post;
        var date = new Date(post.created_at).toLocaleDateString("en-us", options);
        return (
            <div>
                <Banner title="Post" subtitle=""></Banner>
                <main className="post">
                  <div>
                      <h2>{post.title}</h2>
                      <h3 className="meta-data">Written by {post.author} on {date}</h3>
                      <div className="content">{post.content}</div>
                  </div>
                </main>
            </div>
        );
    }
}

export default Post;
