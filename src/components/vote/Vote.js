import React from 'react';
import Banner from '../navigation/banner/Banner';

class Vote extends React.Component {
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
