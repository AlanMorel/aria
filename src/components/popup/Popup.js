import React from 'react';

class Popup extends React.Component {

    render() {
        if (!this.props.state.show) {
            return null;
        }
        return (
            <div className="popup">
                <div className="popup-content">
                    <div className="prompt-close" onClick={this.props.close}>&#10006;</div>
                    <div className="prompt-title">{this.props.state.title}</div>
                    <div className="prompt-text">{this.props.state.text}</div>
                </div>
            </div>
        );
    }
}

export default Popup;
