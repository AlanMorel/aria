import React from 'react';
import { Link } from 'react-router-dom';

class Promo extends React.Component {

    render() {
        var page = this.props.page;
        var text = this.props.text;

        var link = {
            pathname: page
        };

        return (
            <div className="promo">
                <Link to={link}>
                    <img src={"/images/" + this.props.image + ".png"} alt="" />
                    <span className="text">{text}</span>
                </Link>
            </div>
        );
    }
}

export default Promo;
