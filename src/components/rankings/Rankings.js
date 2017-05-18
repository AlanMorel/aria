import React from 'react';
import Config from '../../Config';
import Utility from '../../Utility';

import Banner from '../navigation/banner/Banner';
import Rankingslist from '../../components/rankings/rankingslist/Rankingslist';

class Rankings extends React.Component {

    componentDidMount() {
        Utility.setTitle("Rankings");
    }

    render() {
        var params = this.props.match.params;
        var subtitle = "See who's who in " + Config.server_name + ".";
        return (
            <div>
                <Banner title="Rankings" subtitle={subtitle} />
                <main className="rankings">
                    <Rankingslist params={params} pagination={true} category={true} />
                </main>
            </div>
        );
    }
}

export default Rankings;
