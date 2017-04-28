import React from 'react';
import Config from '../../Config';

import Banner from '../navigation/banner/Banner';
import Status from '../home/status/Status';

import Newslist from '../news/newslist/Newslist';
import Rankingslist from '../rankings/rankingslist/Rankingslist';
import More from '../navigation/more/More';
import Promo from '../promo/Promo';

import Discord from '../social/discord/Discord';
import Twitter from '../social/twitter/Twitter';
import Facebook from '../social/facebook/Facebook';

class Home extends React.Component {

    componentDidMount() {
        Config.setTitle("Home");
    }

    render() {
        return (
            <div>
                <Banner title={Config.server_name} subtitle=""></Banner>
                <main className="home">
                    <div className="left">
                        <h1>Latest News and Events</h1>
                        <Newslist pagination={false} category={false}/>
                        <More type="news"/>
                        <Promo page="vote" text="Vote!"/>
                        <Promo page="vote" text="Vote!"/>
                        <h1>Player Rankings</h1>
                        <Rankingslist pagination={false} category={false}/>
                        <More type="rankings"/>
                    </div>
                    <div className="right">
                        <h1>Server Status</h1>
                        <Status/>
                        <Discord/>
                        <Twitter/>
                        <Facebook/>
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;
