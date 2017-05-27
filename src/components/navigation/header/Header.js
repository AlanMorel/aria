import React from 'react';

import Alert from '../../../components/navigation/alert/Alert';
import Links from '../../../components/navigation/links/Links';
import Greeting from '../../../components/greeting/Greeting';
import Prompts from '../../../components/navigation/prompts/Prompts';

class Header extends React.Component {
    render() {
        return (
            <section className="header">
                <Alert />
                <Links />
                <Greeting status={this.props.status} setLogin={this.props.setLogin} />
                <Prompts status={this.props.status} setLogin={this.props.setLogin} />
            </section>
        );
    }
}

export default Header;
