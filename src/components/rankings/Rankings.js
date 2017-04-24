import React from 'react';
import Config from '../../Config';

import Banner from '../navigation/banner/Banner';
import Rankingslist from '../../components/rankings/rankingslist/Rankingslist';

class Rankings extends React.Component {

    componentDidMount() {
        Config.setTitle("Rankings");
    }

    render() {
        var params = this.props.match.params;

        return (
            <div>
                <Banner title="Rankings" subtitle={"See who's who in " + Config.server_name + "."}></Banner>
                <main className="rankings">
                    <Rankingslist params={params} pagination={true} category={true}/>
                </main>
            </div>
        );
    }
}

export default Rankings;
