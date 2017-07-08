import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Utility from '../../../Utility';

import Player from '../../../components/rankings/player/Player';
import Category from '../../navigation/category/Category';
import Pagination from '../../navigation/pagination/Pagination';
import Loading from '../../loading/Loading';

class Rankingslist extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.searchJobChange = this.searchJobChange.bind(this);
        this.searchUsernameChange = this.searchUsernameChange.bind(this);
        this.state = {
            data: {
                data: [],
                error: [],
            },
            job: "",
            username: ""
        };
    }

    componentDidMount() {
        this.requestData(this.props.params);
    }

    componentWillReceiveProps (newProps) {
        if (!this.props.params || !newProps.params){
            return;
        }
        if (this.props.params.param1 !== newProps.params.param1) {
          this.requestData(newProps.params);
        } else if (this.props.params.param2 !== newProps.params.param2) {
          this.requestData(newProps.params);
        } else if (this.props.params.param3 !== newProps.params.param3) {
          this.requestData(newProps.params);
        }
    }

    requestData(params){
        Axios.get('rankings' + this.getResource(params)).then(response => {
            console.log(response.data);
            this.setState({data: response.data});
        });
        Utility.scrollToTop();
    }

    getResource(params) {

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
        if (this.state.data.success === false) {
            return (
                <div className="error">{this.state.data.error}</div>
            );
        }

        if (this.state.data.length === 0) {
            return <Loading />
        }

        var base = (this.state.data.current - 1) * 5;
        var rank = base;

        var isUsernameSearch = this.isRankingsType("search");

        return this.state.data.data.map(function(player) {
            rank += 1;
            return (
                <Player player={player} rank={isUsernameSearch ? null : rank} key={player.name} />
            );
        });
    }

    isRankingsType(type) {
        if (!this.props.params) {
            return false;
        }
        if (!this.props.params.param1) {
            return false;
        }
        if (this.props.params.param1.toLowerCase() !== type) {
            return false;
        }
        return true;
    }

    searchJobChange(event) {
        this.setState({job: event.target.value});
    }

    searchUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    shouldPaginate(){
        if (!this.props.pagination) {
            return false;
        }
        if (!this.state.data.success) {
            return false;
        }
        if (this.isRankingsType("search")) {
            return false;
        }
        return true;
    }

    render() {

        if (this.props.category) {
            var category = <Category type="rankings" active={this.props.params.param1} />
        }

        if (this.shouldPaginate()) {
            var page_info = {
                prev: this.state.data.prev,
                current: this.state.data.current,
                next: this.state.data.next,
                last: this.state.data.last
            }
            var params = [this.props.params.param1, this.props.params.param2, this.props.params.param3];
            var pagination = <Pagination type="rankings" page_info={page_info} params={params} />
        }

        if (this.isRankingsType("job")) {
            var jobSelection = (
                <div>
                    <select className="job" onChange={this.searchJobChange} defaultValue={"select"}>
                        <option value="select" disabled="disabled">Select Job</option>
                        <optgroup label="Explorers">
                            <option value="beginner">Beginner</option>
                            <option value="warrior">Warriors</option>
                            <option value="magician">Magician</option>
                            <option value="bowman">Bowman</option>
                            <option value="thief">Thief</option>
                            <option value="pirate">Pirate</option>
                        </optgroup>
                        <optgroup label="Cygnus Knights">
                            <option value="noblesse">Noblesse</option>
                            <option value="dawn-warrior">Dawn Warrior</option>
                            <option value="blaze-wizard">Blaze Wizard</option>
                            <option value="wind-archer">Wind Archer</option>
                            <option value="night-walker">Night Walker</option>
                            <option value="thunder-breaker">Thunder Breaker</option>
                        </optgroup>
                        <optgroup label="Heroes">
                            <option value="aran">Aran</option>
                            <option value="evan">Evan</option>
                        </optgroup>
                    </select>
                    <Link className="submit" to={{pathname: '/rankings/job/' + this.state.job}}>Search</Link>
                </div>
            );
        } else if (this.isRankingsType("search")) {
            var search = (
                <div className="search">
                    <input type="text" name="name" placeholder="Player Name" onChange={this.searchUsernameChange} />
                    <Link className="submit" to={{pathname: '/rankings/search/' + this.state.username}}>Search</Link>
                </div>
            );
        }

        return (
            <section className="rankingslist">
                  {category}
                  {jobSelection}
                  {search}
                  <div>{this.getPlayers()}</div>
                  {pagination}
            </section>
        );
    }
}

export default Rankingslist;
