import React from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import Config from '../../Config';

class Greeting extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        console.log("Logging out...");
        Axios.get('logout', { withCredentials: true }).then(response => {
            console.log(response.data);
            if (response.data.success){
                console.log("Successfully logged out.");
                this.props.setLogin(response.data.data);
            } else {
                console.log("Error: " + response.data.error);
            }
        });
    }

    render() {
        if (!this.props.status.logged_in){
            return null;
        }
        return (
            <section className="greeting">
                <span className="welcome">Welcome back, {this.props.status.username}</span>
                <ul className="options">
                    <li><NavLink activeClassName="active" to={{pathname: '/controlpanel'}}>Control Panel</NavLink></li>
                    <li onClick={this.logout}><span>Logout</span></li>
                </ul>
            </section>
        );
    }
}

export default Greeting;
