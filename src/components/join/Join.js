import React from 'react';
import Banner from '../navigation/banner/Banner';

class Join extends React.Component {
    render() {
        return (
            <div>
                <Banner title="Join" subtitle="Be a part of our community!"></Banner>
                <main className="join"></main>
            </div>
        );
    }
}

export default Join;
