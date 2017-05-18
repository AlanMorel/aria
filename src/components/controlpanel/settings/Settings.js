import React from 'react';
import Axios from 'axios';
import Config from '../../../Config';

class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.announcementChange = this.announcementChange.bind(this);
        this.expRateChange = this.expRateChange.bind(this);
        this.mesoRateChange = this.mesoRateChange.bind(this);
        this.dropRateChange = this.dropRateChange.bind(this);

        this.state = {
            name: "Aria",
            announcement: "",
            sockets: "{\"Channel 1\":{\"ip\":\"50.62.108.1\",\"port\":80},\"Channel 2\":{\"ip\":\"167.114.141.107\",\"port\":7576},\"Login\":{\"ip\":\"107.180.40.196\",\"port\":80}}",
            exp: 1,
            meso: 1,
            drop: 1,
            version: 83
        };
    }

    componentDidMount() {
        Axios.get(Config.base_url + `settings`).then(response => {
            console.log(response.data.data);
            this.setState(response.data.data);
        });
    }

    announcementChange(event) {
        this.setState({announcement: event.target.value});
    }

    expRateChange(event) {
        this.setState({exp: event.target.value});
    }

    mesoRateChange(event) {
        this.setState({meso: event.target.value});
    }

    dropRateChange(event) {
        this.setState({drop: event.target.value});
    }

    update() {
        console.log("Updating settings");
        console.log(this.state);

        Axios.patch(Config.base_url + `settings`, this.state, {withCredentials: true}).then(response => {
            console.log(response.data);

            if (response.data.success) {
                this.setState(response.data);
                console.log("Successfully updated settings.");
            } else {
                console.log("Error: " + response.data.error);
            }
        });
    }

    render() {
        return (
            <div className="settings">
                <h2>Settings</h2>
                <div className="settings-alert">
                    <input type="text" placeholder="Enter an alert" onChange={this.announcementChange} value={this.state.announcement}></input>
                </div>
                <div className="settings-rates">
                    <span className="rate">Exp:</span>
                    <input type="number" min="1" max="1000" onChange={this.expRateChange} value={this.state.exp}></input>
                    <span className="rate">Meso:</span>
                    <input type="number" min="1" max="1000" onChange={this.mesoRateChange} value={this.state.meso}></input>
                    <span className="rate">Drop:</span>
                    <input type="number" min="1" max="1000" onChange={this.dropRateChange} value={this.state.drop}></input>
                </div>
                <button onClick={this.update} className="update-button">Update</button>
            </div>
        );
    }
}

export default Settings;
