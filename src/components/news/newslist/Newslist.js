import React from 'react';

var options = { month: "short", day: "numeric" };

class Newslist extends React.Component {

    render() {

        if (!this.props.posts.length) {
            return <div></div>;
        }

        var posts = this.props.posts.map(function(post) {
          var date = new Date(post.created_at).toLocaleDateString("en-us", options);
          var content = post.content.substring(0, 100);
            return (
                <div key={post.id} className="newslist-post">
                    <h2>{post.title}</h2>
                    <h3 className="meta-data">Written by {post.author} on {date}</h3>
                    <div className="content">{content}</div>
                </div>
            );
        });

        return (
            <section>
                {posts}
            </section>
        );
    }
}

export default Newslist;
