import React from 'react';
import Config from '../../../Config';

class Twitter extends React.Component {

    render() {
        return (
            <div>
                <main className="twitter">
                    <a class="twitter-timeline" href={"https://twitter.com/" + Config.twitter.handle}>Tweets by {Config.twitter.handle}</a>
                    <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
                </main>
            </div>
        );
    }
}

export default Twitter;
