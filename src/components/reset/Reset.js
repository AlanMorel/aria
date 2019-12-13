import React from 'react';
import Axios from 'axios';

class Reset extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: []
        };
    }

    reset(event) {
        event.preventDefault();

        let form = new FormData(this.refs.form);

        Axios.post('reset', form).then((response) => {
            if (response.data.success) {
                this.props.close();
                this.props.openPopup("Success", response.data.data);
            } else {
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
            <div className="reset">
                <form onSubmit={this.reset.bind(this)} ref="form">
                    <div className="prompt-close" onClick={this.props.close}>&#10006;</div>
                    <div className="prompt-title">Reset</div>
                    <div>
                        <label htmlFor="mapleid">MapleID:</label>
                        <input className="text" name="mapleid" type="text" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input className="text" name="email" type="text" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input className="password" name="password" type="password" />
                    </div>
                    <div>
                        <label htmlFor="confirm">Confirm</label>
                        <input className="confirm" name="password_confirmation" type="password" />
                    </div>
                    {alert}
                    <input className="button" type="submit" value="Reset" />
                </form>
            </div>
        );
    }
}

export default Reset;
