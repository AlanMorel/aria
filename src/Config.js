var Config = {};

Config.server_name = "Aria";

Config.setup_download_link = "https://www.google.com/";
Config.client_download_link = "https://www.google.com/";

Config.about_content = "This is where the about content goes.";
Config.forum_link = "https://www.google.com/";

Config.exp_rate = 1;
Config.meso_rate = 1;
Config.drop_rate = 1;

Config.facebook_username = "aria";
Config.twitter_handle = "@aria"

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
