import React from 'react';
import Axios from 'axios';
import Config from '../../Config';
import Newslist from '../../components/news/newslist/Newslist';
import Banner from '../navigation/banner/Banner';

class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: {}
        };
    }

    componentDidMount() {
        var param1 = this.props.match.params.param1;
        var param2 = this.props.match.params.param2;

        console.log(param1, param2);

        var append = "";

        if (param1) {
            append += "/" + param1;
        }

        if (param2) {
            append += "/" + param2;
        }

        Axios.get(Config.base_url + `news` + append).then(response => {
            this.setState({posts: response.data});
        });
    }

    getBannerTitle() {
        var title = this.props.match.params.param1;
        if (title == null || !isNaN(title)) {
            return "News";
        } else {
            return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
        }
    }

    render() {
        return (
            <div>
                <Banner title={this.getBannerTitle()} subtitle="Stay up-to-date with messages from the team."></Banner>
                <main className="news">
                    <Newslist posts={this.state.posts}/>
                </main>
            </div>
        );
    }
}

export default News;
