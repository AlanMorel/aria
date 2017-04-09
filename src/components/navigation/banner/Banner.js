import React from 'react';

class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
              <img src="/images/background.png" alt=""/>
              <div className="banner-title">
                <h1>{this.props.title}</h1>
              </div>
            </div>
        );
    }
}

export default Banner;
