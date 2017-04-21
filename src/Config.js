var Config = {};

Config.server_name = "Aria";

Config.setup_download_link = "https://www.google.com/";
Config.client_download_link = "https://www.google.com/";

Config.forum_link = "https://www.google.com/";

Config.exp_rate = 1;
Config.meso_rate = 1;
Config.drop_rate = 1;

Config.alert = {
    type: "announcement",
    content: "Hello world! Welcome to the Aria CMS! This is an example announcement!",
    post_id: 0
}

Config.discord = {
    base_url: 'https://discordapp.com/widget',
    server_id: '204832571467628545',
    theme: 'light',
    width: 350,
    height: 500,
    allowtransparency: true,
    frameborder: 0
}

Config.twitter = {
    handle: 'PlayMapleOrion'
}

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
}

Config.base_url = "http://laravel.austin-adams.us/";

Config.post_type = [
    'General',
    'Announcement',
    'Update',
    'Event',
    'Development',
    'Community',
    'News'
];

module.exports = Config;
