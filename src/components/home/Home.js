import React from 'react';
import Config from '../../Config';
import Utility from '../../Utility';

import Banner from '../navigation/banner/Banner';
import Status from '../home/status/Status';

import Newslist from '../news/newslist/Newslist';
import Rankingslist from '../rankings/rankingslist/Rankingslist';
import More from '../navigation/more/More';
import Promo from '../promo/Promo';

import Discord from '../social/discord/Discord';
import Facebook from '../social/facebook/Facebook';
// import Twitter from '../social/twitter/Twitter';

class Home extends React.Component {

    componentDidMount() {
        Utility.setTitle("Home");
    }

    getSubtitle() {
        return "v" + Config.version + " MapleStory Private Server (" + Config.exp_rate + "x exp, " + Config.meso_rate + "x meso, " + Config.drop_rate + "x drop)";
    }

    render() {
        return (
            <div>
                <Banner title={Config.server_name} subtitle={this.getSubtitle()} />
                <main className="home">
                    <div className="left">
                        <h1>Latest News and Events</h1>
                        <Newslist pagination={false} category={false} />
                        <More type="news"/>
                        <Promo image="promo" page="vote" text={"Vote for " + Config.server_name + "!"} />
                        <Promo image="about" page="about" text={"What is " + Config.server_name + "?"} />
                        <h1>Player Rankings</h1>
                        <Rankingslist pagination={false} category={false} />
                        <More type="rankings" />
                    </div>
                    <div className="right">
                        <h1>Server Status</h1>
                        <Status />
                        <Discord />
                        <Facebook />
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;
