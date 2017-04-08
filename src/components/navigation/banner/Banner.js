import React from 'react';

class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
              <img src="/images/background.png" alt=""/>
              <div>
                <h1>{this.props.title}</h1>
              </div>
            </div>
        );
    }
}

export default Banner;
