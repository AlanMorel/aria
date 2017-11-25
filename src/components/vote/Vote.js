import React from 'react';
import Config from '../../Config';
import Utility from '../../Utility';

import Banner from '../navigation/banner/Banner';

class Vote extends React.Component {

    componentDidMount() {
        Utility.setTitle("Vote");
        console.log(this.props.status);
    }

    getSiteUrl(site) {
        if (!this.props.status.logged_in) {
            return site.url;
        } else {
            return site.url + site.getPingback(this.props.status.mapleid);
        }
    }

    getVoteSites() {
        if (!this.props.status.logged_in) {
            return null;
        }
        var voteSites = [];
        for (var i in Config.vote_sites) {
            var site = Config.vote_sites[i];
            voteSites.push(
                <div key={site.name}>
                    <h1>{site.name}</h1>
                    <a href={this.getSiteUrl(site)} target="_blank">
                        <div className="vote-link">
                            <img src="/images/vote.png" alt="" />
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

    getInfo() {
        if (this.props.status.logged_in) {
            return "If the vote is successful, the rewards will be added to your account shortly.";
        } else {
            return "Please log in to your account to vote for us.";
        }
    }

    render() {
        return (
            <div>
                <Banner title="Vote" subtitle="Support us by voting!" />
                <main className="vote">
                    <h3 className="info">{this.getInfo()}</h3>
                    {this.getVoteSites()}
                </main>
            </div>
        );
    }
}

export default Vote;
