import React from 'react';

import Join from '../../../components/join/Join';
import Login from '../../../components/login/Login';

class Banner extends React.Component {

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
        console.log("openingJoin");
        this.setState({showJoin: true});
    }

    closeJoin() {
        console.log("closingJoin");
        this.setState({showJoin: false});
    }

    openLogin() {
        console.log("openLogin");
        this.setState({showLogin: true});
    }

    closeLogin() {
        console.log("closeLogin");
        this.setState({showLogin: false});
    }

    render() {
        return (
            <div className="banner">
                <img src="/images/background.png" alt=""/>
                <div className="banner-heading">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                </div>
                <div className="prompts">
                    <a href="#" onClick={this.openJoin} className="prompt-button">Join</a>
                    <a href="#" onClick={this.openLogin} className="prompt-button">Login</a>
                    <Join show={this.state.showJoin} close={this.closeJoin}/>
                    <Login show={this.state.showLogin} close={this.closeLogin}/>
                </div>
            </div>
        );
    }
}

export default Banner;
