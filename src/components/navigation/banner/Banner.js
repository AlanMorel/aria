import React from 'react';

import Prompts from '../../../components/navigation/prompts/Prompts';

class Banner extends React.Component {

    render() {
        return (
            <div className="banner">
                <div className="banner-heading">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                </div>
                <Prompts></Prompts>
            </div>
        );
    }
}

export default Banner;
