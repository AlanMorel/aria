import React from 'react';
import Axios from 'axios';
import Config from '../../../Config';

class Status extends React.Component {

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

    getStatus() {
        if (!this.state.data.server_status) {
            return "loading";
        }
        var isServerOnline = this.state.data.online_count > 0;

        return isServerOnline ? "online" : "offline";
    }

    getTitle() {
        if (!this.state.data.server_status) {
            return "Loading server status...";
        }

        return Config.server_name + (this.state.data.online_count > 0 ? " is online" : " is offline");
    }

    getStatuses() {
        if (!this.state.data.server_status) {
            return;
        }
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
        if (!this.state.data.server_status){
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
