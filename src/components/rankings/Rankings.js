import React from 'react';
import Config from '../../Config';
import Axios from 'axios';

import Player from '../../components/rankings/player/Player';
import Banner from '../navigation/banner/Banner';
import Pagination from '../navigation/pagination/Pagination';

class Rankings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                data: []
            },
            loaded: false
        };
    }

    componentDidMount() {
        Axios.get(Config.base_url + `rankings` + this.getResource()).then(response => {
          console.log(response.data);

            this.setState({
                data: response.data,
                loaded: true
            });
        });
    }

    getResource() {
        var param1 = this.props.match.params.param1;
        var param2 = this.props.match.params.param2;
        var param3 = this.props.match.params.param3;

        console.log(param1, param2, param3);

        var resource = "";

        if (param1) {
            resource += "/" + param1;
        }

        if (param2) {
            resource += "/" + param2;
        }

        if (param3) {
            resource += "/" + param3;
        }

        return resource;
    }

    render() {

        var players = this.state.data.data.map(function(player) {
            return (
                <Player player={player} key={player.name}></Player>
            );
        });

        var prev = this.state.data.prev;
        var current = this.state.data.current;
        var next = this.state.data.next;
        var last = this.state.data.last;

        return (
            <div>
                <Banner title="Rankings" subtitle={"See who's who in " + Config.server_name + "."}></Banner>
                <main className="rankings">
                  <section>{players}</section>
                  <Pagination type="rankings" prev={prev} current={current} next={next} last={last}/>
                </main>
            </div>
        );
    }
}

export default Rankings;
