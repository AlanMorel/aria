import React from 'react';
import Axios from 'axios';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: []
        };
    }

    login(event) {
        event.preventDefault();

        var form = new FormData(this.refs.form);
        Axios.post('login', form).then((response) => {
            console.log(response.data);

            if (response.data.success) {
                console.log("Successful Login");
                this.props.close();
                this.props.setLogin(response.data.data);
            } else {
                console.log("Failed to Login");
                console.log(response.data.error);
                this.setState({error: response.data.error});
            }
        });
    }

    render() {
        if (!this.props.open) {
            this.state = {
                error: []
            };
            return null;
        }

        if (this.state.error.length) {
            var alert = (
                <div className="alert">{this.state.error}</div>
            );
        }

        return (
            <div className="login">
                <form onSubmit={this.login.bind(this)} ref="form">
                    <div className="prompt-close" onClick={this.props.close}>&#10006;</div>
                    <div className="prompt-title">Login</div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input className="text" name="email" type="text" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input className="password" name="password" type="password" />
                    </div>
                    {alert}
                    <input className="button" type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default Login;
