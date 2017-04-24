import React from 'react';
import Axios from 'axios';
import Config from '../../../Config';

import Player from '../../../components/rankings/player/Player';
import Category from '../../navigation/category/Category';
import Pagination from '../../navigation/pagination/Pagination';

class Rankings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                data: []
            }
        };
    }

    componentDidMount() {
        Axios.get(Config.base_url + `rankings` + this.getResource()).then(response => {
            console.log(response.data);
            this.setState({
                data: response.data
            });
        });
    }

    getResource() {

        console.log(this.props.params);

        if (!this.props.params) {
            return "";
        }

        var param1 = this.props.params.param1;
        var param2 = this.props.params.param2;
        var param3 = this.props.params.param3;

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

        if (this.props.category) {
            var category = <Category type="rankings" active={this.props.params.param1}/>
        }

        if (this.props.pagination) {
            var page_info = {
                prev: this.state.data.prev,
                current: this.state.data.current,
                next: this.state.data.next,
                last: this.state.data.last
            }
            var params = [this.props.params.param1, this.props.params.param2, this.props.params.param3];
            var pagination = <Pagination type="rankings" page_info={page_info} params={params}/>
        }

        return (
            <section className="rankingslist">
                  {category}
                  <div>{players}</div>
                  {pagination}
            </section>
        );
    }
}

export default Rankings;
