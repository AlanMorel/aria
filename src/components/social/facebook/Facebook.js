import React from 'react';
import Config from '../../../Config';

class Facebook extends React.Component {

    render() {
        var styles = {
            border: 'none',
            overflow: 'hidden'
        };

        var url = Config.facebook.base_url;
        url += "plugins/page.php?";
        url += "href=" + encodeURI(Config.facebook.base_url + Config.facebook.username);
        url += "&tabs=timeline";
        url += "&width=" + Config.facebook.width;
        url += "&height=" + Config.facebook.height;
        url += "&small_header=" + Config.facebook.small_header;
        url += "&adapt_container_width=" + Config.facebook.adapt_container_width;
        url += "&hide_cover=" + Config.facebook.hide_cover;
        url += "&show_facepile=" + Config.facebook.show_facepile;
        url += "&appId";

        return (
            <div>
                <main className="facebook">
                    <iframe
                        src={url}
                        width={Config.facebook.width}
                        height={Config.facebook.height}
                        style={styles}
                        scrolling={Config.facebook.scrolling}
                        frameBorder={Config.facebook.frameborder}
                        allowTransparency={Config.facebook.allowtransparency}>
                    </iframe>
                </main>
            </div>
        );
    }
}

export default Facebook;
