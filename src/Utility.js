import Config from './Config';

var Utility = {};

Utility.scrollToTop = function() {
    window.scrollTo(0, 0);
};

Utility.setTitle = function(title) {
    document.title = title + " | " + Config.server_name + " - MapleStory Private Server";
    this.scrollToTop();
};

export default Utility
