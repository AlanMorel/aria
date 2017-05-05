import React from 'react';
import Axios from 'axios';
import Config from '../../Config';

class Greeting extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        console.log("Logging out...");
        Axios.get(Config.base_url + `logout`).then(response => {
            console.log(response.data);
            if (response.data.success === false){
                console.log("Error: " + response.data.error);
            } else {
                console.log("Successfully logged out.");
                this.props.setLogin(response.data);
            }
        });
    }

    render() {
        if (!this.props.status.logged_in){
            return (
                <div></div>
            );
        }
        return (
            <section className="greeting">
                <span className="welcome">Welcome back, {this.props.status.username}</span>
                <ul className="options">
                    <li onClick={this.logout}>Logout</li>
                </ul>
            </section>
        );
    }
}

export default Greeting;
