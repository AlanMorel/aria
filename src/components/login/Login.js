import React from 'react';
import Axios from 'axios';
import Config from '../../Config';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: []
        };
    }

    login(e) {
        e.preventDefault();

        var form = new FormData(this.refs.form);

        Axios.post(Config.base_url + "login", form).then((response) => {
            console.log(response.data);

            if (response.data.success){
                console.log("Successful Login");
                this.props.close();
                this.props.setLogin(response.data);
            } else {
                console.log("Failed to Login");
                console.log(response.data.error);
                this.setState({error: response.data.error});
            }
            // test
            this.props.setLogin({
                logged_in: true,
                username: "Alan",
                gm_level: 5
            });
            this.props.close();
        });

    }

    render() {
        if (!this.props.open){
            this.state = {
                errors: []
            };
            return (
                <div></div>
            );
        }

        if (this.state.error){
            var alert = (
                <div className="alert">{this.state.error}</div>
            );
        }

        return (
            <div className="login">
                <form onSubmit={ this.login.bind(this) } ref="form">

                    <div className="prompt-close" onClick={ this.props.close }>&#10006;</div>
                    <div className="prompt-title">Login</div>

                    <div>
                        <label htmlFor="username">Username</label>
                        <input className="text" name="username" type="text"/>
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input className="password" name="password" type="password"/>
                    </div>

                    {alert}

                    <input className="button" type="submit" value="Login"/>
                </form>
            </div>
        );
    }
}

export default Login;
