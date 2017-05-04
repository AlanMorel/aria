import React from 'react';

import Links from '../../../components/navigation/links/Links';
import Alert from '../../../components/navigation/alert/Alert';
import Prompts from '../../../components/navigation/prompts/Prompts';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Links/>
                <Alert/>
                <Prompts status={this.props.status}/>
            </div>
        );
    }
}

export default Header;
