import React from 'react';
import Axios from 'axios';
import Config from '../../Config';
import ReCAPTCHA from 'react-google-recaptcha';

class Join extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: []
        };
    }

    register(e) {
        e.preventDefault();

        var form = new FormData(this.refs.form);

        Axios.post(Config.base_url + "join", form).then((response) => {
            console.log(response.data);

            if (response.data.success){
                console.log("Success");
                this.props.openPopup("Welcome!", "Your account has been registered successfully. We're glad to have you on board!");
                this.props.close();
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

    onChange(value) {
      console.log("Captcha value:", value);
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

        if (this.state.errors.length){
            var alert = (
                <div className="alert">{this.state.errors[0]}</div>
            );
        }

        return (
            <div className="join">
                <form onSubmit={ this.register.bind(this) } ref="form">

                    <div className="prompt-close" onClick={ this.props.close }>&#10006;</div>
                    <div className="prompt-title">Join {Config.server_name}</div>

                    <div>
                        <label htmlFor="name">Name</label>
                        <input className="text" name="full_name" type="text"/>
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input className="text" name="email" type="email"/>
                    </div>

                    <div>
                        <label htmlFor="username">Username</label>
                        <input className="text" name="username" type="text"/>
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input className="password" name="password" type="password"/>
                    </div>

                    <div>
                        <label htmlFor="confirm">Confirm</label>
                        <input className="confirm" name="password_confirmation" type="password"/>
                    </div>

                    <div className="repatcha-container">
                        <ReCAPTCHA className="recaptcha" ref="recaptcha" onChange={this.onChange} sitekey={Config.recaptcha_key}/>
                    </div>

                    {alert}

                    <div>
                        <input className="button" type="submit" value="Join"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Join;
