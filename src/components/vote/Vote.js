import React from 'react';
import Config from '../../Config';

import Banner from '../navigation/banner/Banner';

class Vote extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Config.setTitle("Vote");
        console.log(this.props.status);
    }

    render() {
        return (
            <div>
                <Banner title="Vote" subtitle="Support us by voting!"></Banner>
                <main className="vote"></main>
            </div>
        );
    }
}

export default Vote;
