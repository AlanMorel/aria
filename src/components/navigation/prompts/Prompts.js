import React from 'react';

import Join from '../../../components/join/Join';
import Login from '../../../components/login/Login';

class Prompts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showJoin: false,
            showLogin: false
        };
        this.openJoin = this.openJoin.bind(this);
        this.closeJoin = this.closeJoin.bind(this);

        this.openLogin = this.openLogin.bind(this);
        this.closeLogin = this.closeLogin.bind(this);
    }

    openJoin() {
        this.setState({showJoin: true});
    }

    closeJoin() {
        this.setState({showJoin: false});
    }

    openLogin() {
        this.setState({showLogin: true});
    }

    closeLogin() {
        this.setState({showLogin: false});
    }

    render() {
        return (
            <div className="prompts">
                <a href="#" onClick={this.openJoin} className="prompt-button">Join</a>
                <a href="#" onClick={this.openLogin} className="prompt-button">Login</a>
                <Join open={this.state.showJoin} close={this.closeJoin}/>
                <Login open={this.state.showLogin} close={this.closeLogin}/>
            </div>
        );
    }
}

export default Prompts;
