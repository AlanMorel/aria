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

    render() {
        if (!this.state.data.server_status) {
            return (
                <div className="status loading">Loading server status...</div>
            );
        }

        var isServerOnline = this.state.data.online_count > 0;

        isServerOnline = false;

        var title = Config.server_name + (isServerOnline ? " is online" : " is offline");

        var statuses = this.state.data.server_status.map(function(server) {
            if (server.status){
                var span = <span className="server-online">Online</span>
            } else {
                var span = <span className="server-offline">Offline</span>
            }
            return (
                <li key={server.name}>{server.name} {span}</li>
            )
        });

        return (
            <div className="status">
                <div className={(isServerOnline ? "online" : "offline")}>
                    <div className="title">{title}</div>
                    <div className="online-count">{this.state.data.online_count} Players Online</div>
                </div>
                <ul className="server-statuses">
                    {statuses}
                </ul>
            </div>

        );
    }
}

export default Status;
