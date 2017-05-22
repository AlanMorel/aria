import React from 'react';
import Axios from 'axios';
import Config from '../../../Config';
import Utility from '../../../Utility';

import { NavLink } from 'react-router-dom';

import Category from '../../navigation/category/Category';
import Pagination from '../../../components/navigation/pagination/Pagination';
import Loading from '../../loading/Loading';

var options = {
    month: "short",
    day: "numeric"
};

class Newslist extends React.Component {

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
        this.requestData(this.props.params);
    }

    componentWillReceiveProps (newProps) {
        if (!this.props.params || !newProps.params){
            return;
        }
        if (this.props.params.param1 !== newProps.params.param1) {
            this.requestData(newProps.params);
        } else if (this.props.params.param2 !== newProps.params.param2) {
            this.requestData(newProps.params);
        } else if (this.props.params.param3 !== newProps.params.param3) {
            this.requestData(newProps.params);
        }
    }

    requestData(params) {
        Axios.get('news' + this.getResource(params)).then(response => {
            console.log(response.data);
            this.setState({data: response.data});
        });
        Utility.scrollToTop();
    }

    getResource(params) {

        if (!params) {
            return "";
        }

        console.log(params.param1, params.param2);

        var resource = "";

        if (params.param1) {
            resource += "/" + params.param1;
        }

        if (params.param2) {
            resource += "/" + params.param2;
        }

        return resource;
    }

    getPosts() {
        if (this.state.data.success === false){
            return (
                <div className="error">{this.state.data.error}</div>
            );
        }

        if (this.state.data.data.length === 0) {
            return <Loading />
        }

        return this.state.data.data.map(function(post) {
            var date = new Date(post.created_at).toLocaleDateString("en-us", options);
            var content = post.content.substring(0, 200).replace(/<(?:.|\n)*?>/gm, '') + "...";

            return (
                <NavLink to={"/post/" + post.id} key={post.id}>
                    <div className="newslist-post">
                        <div className="newslist-image">
                            <img src="/images/background.png" alt="" />
                            <div className={"type " + post.type.toLowerCase()}>{post.type}</div>
                            <div className="views">{post.views} views</div>
                        </div>
                        <div className="newslist-information">
                            <h2>{post.title}</h2>
                            <h3 className="meta-data">Written by {post.author} on {date}</h3>
                            <div className="content">{content}</div>
                            <div className="read-me">read more</div>
                        </div>
                    </div>
                </NavLink>
            );
        });
    }

    shouldPaginate(){
        if (!this.props.pagination) {
            return false;
        }
        if (!this.state.data.success) {
            return false;
        }
        return true;
    }

    render() {

        if (this.shouldPaginate()) {
            var page_info = {
                prev: this.state.data.prev,
                current: this.state.data.current,
                next: this.state.data.next,
                last: this.state.data.last
            }
            var params = [this.props.params.param1, this.props.params.param2];
            var pagination = <Pagination type="news" page_info={page_info} params={params} />
        }

        if (this.props.category) {
            var category = <Category type="news" active={this.props.params.param1} />
        }

        return (
            <section className="newslist">
                {category}
                {this.getPosts()}
                {pagination}
            </section>
        );
    }
}

export default Newslist;
