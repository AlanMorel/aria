import React from 'react';
import Config from '../../../Config';

class Alert extends React.Component {

    constructor(props) {
        super(props);

        this.close = this.close.bind(this);

        this.state = {
            show: true
        };
    }

    close() {
        this.setState({show: false});
    }

    render() {
        if (Config.alert.length < 1 || !this.state.show) {
            return null;
        }
        return (
            <div className="alert">
                <span className="icon"></span>
                {Config.alert}
                <span onClick={this.close} className="close">&#10006;</span>
            </div>
        );
    }
}

export default Alert;
