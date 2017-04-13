import React from 'react';
import Axios from 'axios';
import Config from '../../Config';

class Login extends React.Component {

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

                console.log(errors);
                console.log("Failure");
            }
        });

    }
    render() {
        return (
            <div>
                <main className="login">
                    <form onSubmit={ this.login.bind(this) } ref="form">

                        <label htmlFor="username">Username</label>
                        <input className="text" name="username" type="text"/>

                        <label htmlFor="password">Password</label>
                        <input className="password" name="password" type="password"/>

                        <input className="button" type="submit" value="Login"/>
                    </form>
                </main>
            </div>
        );
    }
}

export default Login;
