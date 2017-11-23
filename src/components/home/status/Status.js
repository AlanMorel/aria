import React from 'react';
import Axios from 'axios';
import Config from '../../../Config';

class Status extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                online_count: 0,
                server_status: []
            },
            fetching: true
        };
    }

    componentDidMount() {
        Axios.get('server').then(response => {
            console.log(response.data);
            this.setState({
                data: response.data,
                fetching: false
            });
        });
    }

    getStatus() {
        if (this.state.fetching) {
            return "loading";
        }
        return this.state.data.server_status[0].status ? "online" : "offline";
    }

    getTitle() {
        if (this.state.fetching) {
            return "Loading...";
        }
        return Config.server_name + " " + this.getStatus();
    }

    getStatuses() {
        return this.state.data.server_status.map(function(server) {
            var className = "server-" + (server.status ? "online" : "offline");
            return (
                <li key={server.name}>
                    {server.name} <span className={className}></span>
                </li>
            )
        });

    }

    getOnlineCount() {
        if (this.state.fetching) {
            return;
        }
        return this.state.data.online_count + " players online";
    }

    render() {

        var status = this.getStatus();

        return (
            <div className="status">
                <div className={status}>
                    <div className="icon">
                        <img src={"/images/" + status + ".png"} alt="" />
                    </div>
                    <div className="description">
                        <div className="title">{this.getTitle()}</div>
                        <div className="online-count">{this.getOnlineCount()}</div>
                    </div>
                </div>
                <ul className="server-statuses">{this.getStatuses()}</ul>
            </div>
        );
    }
}

export default Status;
