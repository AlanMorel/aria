import React from 'react';

class Banner extends React.Component {

    render() {
        return (
            <div className="banner">
                <div className="banner-heading">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                </div>
            </div>
        );
    }
}

export default Banner;
