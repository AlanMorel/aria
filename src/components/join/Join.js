import React from 'react';
import Axios from 'axios';
import Config from '../../Config';

class Join extends React.Component {

    register(e) {
        e.preventDefault();

        var form = new FormData(this.refs.form);

        Axios.post(Config.base_url + "join", form).then((response) => {
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

        if (!this.props.open){
            return (<div></div>);
        }

        return (
            <div>
                <main className="join">
                    <form onSubmit={ this.register.bind(this) } ref="form">

                        <div onClick={ this.props.close }>Close</div>

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

                        <div>
                            <label htmlFor="repatcha">Repatcha</label>
                            <input className="repatcha" name="g-recaptcha-response" type="text"/>
                        </div>

                        <div>
                            <input className="button" type="submit" value="Join"/>
                        </div>
                    </form>
                </main>
            </div>
        );
    }
}

export default Join;
