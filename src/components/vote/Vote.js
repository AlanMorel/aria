import React from 'react';
import Config from '../../Config';

import Banner from '../navigation/banner/Banner';

class Vote extends React.Component {

    componentDidMount() {
        Config.setTitle("Vote");
        console.log(this.props.status);
    }

    getVoteSites(){
        var voteSites = [];
        for (var i in Config.vote_sites) {
            var site = Config.vote_sites[i];
            voteSites.push(
                <div key={site.name}>
                    <h1>{site.name}</h1>
                    <a href={site.url} target="_blank">
                        <div className="vote-link">
                            <img src="/images/vote.png" alt=""/>
                            <div className="description">
                                <h2>Click here to vote on {site.name}.</h2>
                                <h3>You can vote once every {site.hours} hours.</h3>
                            </div>
                        </div>
                    </a>
                </div>
            );
        }
        return voteSites;
    }

    render() {
        var sites = this.getVoteSites();
        return (
            <div>
                <Banner title="Vote" subtitle="Support us by voting!"></Banner>
                <main className="vote">
                    {sites}
                </main>
            </div>
        );
    }
}

export default Vote;
