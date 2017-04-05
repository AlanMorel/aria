import React from 'react';
import Axios from 'axios';
import Config from '../../Config';
import Newslist from '../../components/news/newslist/Newslist';

class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: {}
        };
    }

    componentDidMount() {
        Axios.get(Config.base_url + `posts/1.json`).then(response => {
            this.setState({posts: response.data});
        });
    }

    render() {
        return (
            <div>
                <h1>News</h1>
                <Newslist posts={this.state.posts}/>
            </div>
        );
    }
}

export default News;
