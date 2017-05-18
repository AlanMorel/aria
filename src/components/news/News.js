import React from 'react';
import Utility from '../../Utility';

import Banner from '../navigation/banner/Banner';
import Newslist from '../../components/news/newslist/Newslist';

class News extends React.Component {

    componentDidMount() {
        Utility.setTitle("News");
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
        var params = this.props.match.params;

        return (
            <div>
                <Banner title={title} subtitle="Stay up-to-date with messages from the team." />
                <main className="news">
                    <Newslist params={params} pagination={true} category={true} />
                </main>
            </div>
        );
    }
}

export default News;
