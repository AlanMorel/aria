import React from 'react';
import Config from '../../Config';

import Banner from '../navigation/banner/Banner';

class Vote extends React.Component {

    componentDidMount() {
        Config.setTitle("Vote");
        console.log(this.props.status);
    }

    getSiteUrl(site){
        if(!this.props.status.logged_in){
            return site.url;
        } else {
            return site.url + site.getPingback(this.props.status.username);
        }
    }

    getVoteSites(){
        var voteSites = [];
        for (var i in Config.vote_sites) {
            var site = Config.vote_sites[i];
            voteSites.push(
                <div key={site.name}>
                    <h1>{site.name}</h1>
                    <a href={this.getSiteUrl(site)} target="_blank">
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

    getInfo(){
        if (this.props.status.logged_in){
            return "If the vote is successful, the rewards will be added to your account shortly.";
        } else {
            return "If you would like to be rewarded for voting, please log in. You may choose to vote anyways.";
        }
    }

    render() {
        var sites = this.getVoteSites();
        return (
            <div>
                <Banner title="Vote" subtitle="Support us by voting!"></Banner>
                <main className="vote">
                    <h3 className="info">{this.getInfo()}</h3>
                    {sites}
                </main>
            </div>
        );
    }
}

export default Vote;
