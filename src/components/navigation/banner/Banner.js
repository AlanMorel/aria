import React from 'react';

class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
              <img src="/images/background.png" alt=""/>
              <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Banner;
