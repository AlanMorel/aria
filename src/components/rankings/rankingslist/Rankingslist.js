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
        this.requestData(this.props.params);
    }

    componentWillReceiveProps (newProps) {
      if (this.props.params.param1 !== newProps.params.param1) {
          this.requestData(newProps.params);
      } else if (this.props.params.param2 !== newProps.params.param2) {
          this.requestData(newProps.params);
      }
    }

    requestData(params){
        Axios.get(Config.base_url + `rankings` + this.getResource(params)).then(response => {
            console.log(response.data);
            this.setState({data: response.data});
        });
    }

    getResource(params) {

        console.log(params);

        if (!params) {
            return "";
        }

        console.log(params.param1, params.param2, params.param3);

        var resource = "";

        if (params.param1) {
            resource += "/" + params.param1;
        }

        if (params.param2) {
            resource += "/" + params.param2;
        }

        if (params.param3) {
            resource += "/" + params.param3;
        }

        return resource;
    }

    getPlayers(){
        if (this.state.data.success === false){
            return (
                <div className="error">No players to display.</div>
            );
        }

        var base = (this.state.data.current - 1) * 5;
        var offset = base;

        console.log("base: " + base);

        return this.state.data.data.map(function(player) {
            offset += 1;
            return (
                <Player player={player} rank={offset} key={player.name}></Player>
            );
        });
    }

    render() {

        if (this.props.category) {
            var category = <Category type="rankings" active={this.props.params.param1}/>
        }

        if (this.props.pagination && this.state.data.success) {
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
                  <div>{this.getPlayers()}</div>
                  {pagination}
            </section>
        );
    }
}

export default Rankings;
