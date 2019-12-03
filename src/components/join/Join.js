import React from 'react';
import Axios from 'axios';
import Config from '../../Config';
import ReCAPTCHA from 'react-google-recaptcha';

class Join extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: []
        };
    }

    register(event) {
        event.preventDefault();

        var form = new FormData(this.refs.form);

        Axios.post('join', form).then((response) => {
            console.log(response.data);

            if (response.data.success) {
                console.log("Success");
                this.props.openPopup("Welcome!", "Your account has been registered successfully. We're glad to have you on board!");
                this.props.close();
            } else {
                this.setState({error: response.data.error});
                this.recaptcha.reset();

                console.log(response.data.error);
                console.log("Failure");
            }
        });
    }

    recaptchaOnChange(value) {
        console.log("Captcha value:", value);
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
            <div className="join">
                <form onSubmit={this.register.bind(this)} ref="form">
                    <div className="prompt-close" onClick={this.props.close}>&#10006;</div>
                    <div className="prompt-title">Join {Config.server_name}</div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input className="text" name="name" type="text" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input className="text" name="email" type="email" />
                    </div>
                    <div>
                        <label htmlFor="mapleid">MapleID</label>
                        <input className="text" name="mapleid" type="text" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input className="password" name="password" type="password" />
                    </div>
                    <div>
                        <label htmlFor="confirm">Confirm</label>
                        <input className="confirm" name="password_confirmation" type="password" />
                    </div>
                    <div className="repatcha-container">
                        <ReCAPTCHA className="recaptcha" ref={r => this.recaptcha = r} onChange={this.recaptchaOnChange} sitekey={Config.recaptcha_key} />
                    </div>
                    {alert}
                    <div>
                        <input className="button" type="submit" value="Join" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Join;
