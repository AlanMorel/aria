import React from 'react';
import Config from '../../../Config';

class Discord extends React.Component {

    render() {
        return (
            <div className="discord">
                <iframe
                    title="Discord"
                    src={Config.discord.base_url + "?id=" + Config.discord.server_id + "&theme=" + Config.discord.theme}
                    width={Config.discord.width}
                    height={Config.discord.height}
                    allowTransparency={Config.discord.allowtransparency}
                    frameBorder={Config.discord.frameborder} />
            </div>
        );
    }
}

export default Discord;
