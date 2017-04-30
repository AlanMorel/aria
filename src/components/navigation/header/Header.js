import React from 'react';

import Links from '../../../components/navigation/links/Links';
import Prompts from '../../../components/navigation/prompts/Prompts';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Links/>
                <Prompts></Prompts>
            </div>
        );
    }
}

export default Header;
