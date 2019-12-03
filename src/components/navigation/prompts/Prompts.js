import React from 'react';

import Join from '../../../components/join/Join';
import Login from '../../../components/login/Login';
import Popup from '../../../components/popup/Popup';
import Reset from '../../../components/reset/Reset';

class Prompts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showJoin: false,
            showLogin: false,
            showReset: false,
            popup: {
                show: false,
                title: "",
                text: ""
            }
        };
        this.openJoin = this.openJoin.bind(this);
        this.closeJoin = this.closeJoin.bind(this);

        this.openLogin = this.openLogin.bind(this);
        this.closeLogin = this.closeLogin.bind(this);

        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);

        this.openReset = this.openReset.bind(this);
        this.closeReset = this.closeReset.bind(this);
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

    openReset() {
      this.setState({showReset: true});
    }

    closeReset() {
      this.setState({showReset: false});
    }

    openPopup(title, text) {
        this.setState({
            popup: {
                show: true,
                title: title,
                text: text
                }
            }
        );
    }

    closePopup() {
        this.setState({
            popup: {
                show: false,
                title: "",
                text: ""
                }
            }
        );
    }

    render() {
        if (this.props.status.logged_in) {
            return null;
        }
        return (
            <div className="prompts">
                <a href="/#" onClick={this.openJoin} className="prompt-button">Join</a>
                <a href="/#" onClick={this.openLogin} className="prompt-button">Login</a>
                <Join open={this.state.showJoin} close={this.closeJoin} openPopup={this.openPopup} />
                <Login open={this.state.showLogin} close={this.closeLogin} openPopup={this.openPopup} setLogin={this.props.setLogin} openReset={this.openReset} />
                <Reset open={this.state.showReset} close={this.closeReset} openPopup={this.openPopup} />
                <Popup state={this.state.popup} close={this.closePopup} />
            </div>
        );
    }
}

export default Prompts;
