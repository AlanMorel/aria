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
        Axios.get(Config.base_url + `server`).then(response => {
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

        return this.state.data.online_count > 0 ? "online" : "offline";
    }

    getTitle() {
        if (this.state.fetching) {
            return "Loading server status...";
        }

        return Config.server_name + (this.state.data.online_count > 0 ? " is online" : " is offline");
    }

    getStatuses() {
        return this.state.data.server_status.map(function(server) {
            if (server.status){
                var span = <span className="server-online">Online</span>
            } else {
                var span = <span className="server-offline">Offline</span>
            }
            return (
                <li key={server.name}>{server.name} {span}</li>
            )
        });

    }

    getOnlineCount() {
        if (this.state.fetching){
            return;
        }
        return this.state.data.online_count + " players online";
    }

    render() {

        var title = this.getTitle();
        var status = this.getStatus();
        var statuses = this.getStatuses();
        var onlineCount = this.getOnlineCount();

        return (
            <div className="status">
                <div className={status}>
                    <div className="icon">
                        <img src={"/images/" + status + ".png"} alt=""/>
                    </div>
                    <div className="description">
                        <div className="title">{title}</div>
                        <div className="online-count">{onlineCount}</div>
                    </div>
                </div>
                <ul className="server-statuses">{statuses}</ul>
            </div>
        );
    }
}

export default Status;
