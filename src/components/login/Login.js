import React from 'react';
import Axios from 'axios';
import Config from '../../Config';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: []
        };
    }

    login(e) {
        e.preventDefault();

        var form = new FormData(this.refs.form);

        Axios.post(Config.base_url + "login", form).then((response) => {
            console.log(response.data);

            if (response.data.success){
                console.log("Success");
            } else {
                var errors = [];

                for (var key in response.data.error) {
                    errors.push(response.data.error[key][0]);
                }

                this.setState({errors: errors});

                console.log(errors);
                console.log("Failure");
            }
        });

    }

    render() {
        if (!this.props.open){
            return (
                <div></div>
            );
        }

        if (this.state.errors.length){
            var alert = (
                <div className="alert">{this.state.errors[0]}</div>
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
