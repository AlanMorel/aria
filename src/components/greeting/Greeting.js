import React from 'react';
import { NavLink } from 'react-router-dom';

class Greeting extends React.Component {
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
                    <li><NavLink exact activeClassName="active" to="/logout">Logout</NavLink></li>
                </ul>
            </section>
        );
    }
}

export default Greeting;
