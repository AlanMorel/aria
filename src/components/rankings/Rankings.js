import React from 'react';
import Config from '../../Config';
import Axios from 'axios';

import Player from '../../components/rankings/player/Player';
import Banner from '../navigation/banner/Banner';

class Rankings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        var param1 = this.props.match.params.param1;
        var param2 = this.props.match.params.param2;
        var param3 = this.props.match.params.param3;

        console.log(param1, param2, param3);

        var append = "";

        if (param1) {
            append += "/" + param1;
        }

        if (param2) {
            append += "/" + param2;
        }

        if (param3) {
            append += "/" + param3;
        }

        Axios.get(Config.base_url + `rankings` + append).then(response => {
            this.setState({players: response.data});
        });
    }

    render() {

        var players = this.state.players.map(function(player) {

            return (
                <Player player={player} key={player.name}></Player>
            );
        });

        console.log(players);

        return (
            <div>
                <Banner title="Rankings" subtitle={"See who's who in " + Config.server_name + "."}></Banner>
                <main className="rankings"></main>
                <section>{players}</section>
            </div>
        );
    }
}

export default Rankings;
