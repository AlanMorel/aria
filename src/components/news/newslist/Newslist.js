import React from 'react';
import Axios from 'axios';
import Config from '../../../Config';
import {NavLink} from 'react-router-dom';

import Pagination from '../../../components/navigation/pagination/Pagination';

var options = {
    month: "short",
    day: "numeric"
};

class Newslist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                data: []
            }
        };
    }

    componentDidMount() {
        Axios.get(Config.base_url + `news` + this.getResource()).then(response => {
            this.setState({data: response.data});
        });
    }

    getResource() {

        if (!this.props.match) {
            return "";
        }

        var param1 = this.props.match.params.param1;
        var param2 = this.props.match.params.param2;

        console.log(param1, param2);

        var resource = "";

        if (param1) {
            resource += "/" + param1;
        }

        if (param2) {
            resource += "/" + param2;
        }

        return resource;
    }

    render() {

        if (this.props.pagination) {
            var prev = this.state.data.prev;
            var current = this.state.data.current;
            var next = this.state.data.next;
            var last = this.state.data.last;
            var pagination = <Pagination type="news" prev={prev} current={current} next={next} last={last}/>
        }

        var posts = this.state.data.data.map(function(post) {
            var date = new Date(post.created_at).toLocaleDateString("en-us", options);
            var content = post.content.substring(0, 250) + "...";

            return (
                <NavLink to={"post/" + post.id} key={post.id}>
                    <div className="newslist-post">
                        <div className="newslist-image">
                            <img src="/images/background.png" alt=""/>
                        </div>
                        <div className="newslist-information">
                            <h2>{post.title}</h2>
                            <h3 className="meta-data">Written by {post.author} on {date}</h3>
                            <div className="content">{content}</div>
                        </div>
                    </div>
                </NavLink>
            );
        });

        return (
            <section className="newslist">
                {posts}
                {pagination}
            </section>
        );
    }
}

export default Newslist;
