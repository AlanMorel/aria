var Config = {};

Config.server_name = "Aria";

Config.setup_download_link = "https://www.google.com/";
Config.client_download_link = "https://www.google.com/";

Config.forum_link = "https://www.google.com/";

Config.recaptcha_key = "";

Config.version = 83;
Config.exp_rate = 1;
Config.meso_rate = 1;
Config.drop_rate = 1;

Config.discord = {
    base_url: 'https://discordapp.com/widget',
    server_id: '204832571467628545',
    theme: 'light',
    width: 350,
    height: 500,
    allowtransparency: true,
    frameborder: 0
};

Config.twitter = {
    handle: 'PlayMapleOrion'
};

Config.facebook = {
    base_url: 'https://www.facebook.com/',
    username: 'PlayMapleOrion',
    width: 340,
    height: 500,
    small_header: false,
    adapt_container_width: true,
    hide_cover: false,
    show_facepile: true,
    scrolling: 'no',
    frameborder: 0,
    allowtransparency: true
};

Config.base_url = "http://laravel.austinradams.com/";

Config.post_type = [
    'General',
    'Announcement',
    'Update',
    'Event',
    'Community'
];

Config.vote_sites = {
    gtop: {
        name: "GTOP 100",
        url: "http://www.gtop100.com/topsites/MapleStory/sitedetails/Orion-v90-Nostalgia-with-a-refreshing-twist-92001",
        hours: 24,
        getPingback: function(username) {
            return "?vote=1&pingUsername=" + username;
        }
    }
};

export default Config
