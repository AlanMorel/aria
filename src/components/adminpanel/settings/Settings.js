import React from 'react';
import Axios from 'axios';

import Modal from '../../modal/Modal';

class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.alertChange = this.alertChange.bind(this);

        this.state = {
            alert: ""
        };
    }

    componentDidMount() {
        Axios.get('settings', { withCredentials: true }).then(response => {
            console.log(response.data);
            this.setState(response.data.data);
        });
    }

    alertChange(event) {
        this.setState({alert: event.target.value});
    }

    update() {
        console.log("Updating settings");
        console.log(this.state);

        Axios.patch('settings', this.state, {withCredentials: true}).then(response => {
            console.log(response.data);

            if (response.data.success) {
                this.setState(response.data);
                this.refs.modal.show("Success!", "You have successfully updated the setttings.");
                console.log("Successfully updated settings.");
            } else {
                this.refs.modal.show("Server Error", response.data.error);
                console.log("Error: " + response.data.error);
            }
        });
    }

    render() {
        return (
            <div className="settings">
                <Modal ref="modal" />
                <h2>Settings</h2>
                <div className="settings-alert">
                    <span>Enter alert:</span>
                    <input type="text" placeholder="Enter an alert" onChange={this.alertChange} value={this.state.alert}></input>
                </div>
                <button onClick={this.update} className="update-button">Update Settings</button>
            </div>
        );
    }
}

export default Settings;
