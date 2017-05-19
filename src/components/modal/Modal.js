import React from 'react';

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
        this.close = this.close.bind(this);

        this.state = {
            show: false,
            title: "",
            text: ""
        };
    }

    show(title, text) {
        this.setState({
            show: true,
            title: title,
            text: text
        });
    }

    close(){
        this.setState({show: false});
    }

    render() {
        if (!this.state.show){
            return null;
        }

        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-close" onClick={this.close}>&#10006;</div>
                    <div className="modal-title">{this.state.title}</div>
                    <div className="modal-text">{this.state.text}</div>
                    <div className="modal-ok-button" onClick={this.close}>ok</div>
                </div>
            </div>
        );
    }
}

export default Modal;
