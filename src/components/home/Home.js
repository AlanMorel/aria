import React from 'react';
import Axios from 'axios';
import Config from '../../Config';

import Banner from '../navigation/banner/Banner';
import Discord from '../social/discord/Discord';
import Twitter from '../social/twitter/Twitter';
import Facebook from '../social/facebook/Facebook';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        Axios.get(Config.base_url + `server`).then(response => {
            console.log(response.data);
            this.setState({data: response.data});
        });
    }

    render() {
        return (
            <div>
                <Banner title={Config.server_name} subtitle=""></Banner>
                <main className="home">
                  <Discord></Discord>
                  <Twitter></Twitter>
                  <Facebook></Facebook>

                </main>
            </div>
        );
    }
}

export default Home;
