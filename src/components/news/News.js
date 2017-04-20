import React from 'react';
import Axios from 'axios';
import Config from '../../Config';

import Banner from '../navigation/banner/Banner';
import Newslist from '../../components/news/newslist/Newslist';
import Pagination from '../../components/navigation/pagination/Pagination';

class News extends React.Component {

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
            this.setState({
                data: response.data
            });
        });
    }

    getResource() {
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

    getTitle() {
        var title = this.props.match.params.param1;
        if (title == null || !isNaN(title)) {
            return "News";
        } else {
            return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
        }
    }

    render() {
        var title = this.getTitle();
        var posts = this.state.data.data;
        var prev = this.state.data.prev;
        var current = this.state.data.current;
        var next = this.state.data.next;
        var last = this.state.data.last;

        return (
            <div>
                <Banner title={title} subtitle="Stay up-to-date with messages from the team."></Banner>
                <main className="news">
                    <Newslist posts={posts}/>
                    <Pagination type="news" prev={prev} current={current} next={next} last={last}/>
                </main>
            </div>
        );
    }
}

export default News;
