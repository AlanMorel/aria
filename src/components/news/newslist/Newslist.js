import React from 'react';
import { NavLink } from 'react-router-dom';

var options = { month: "short", day: "numeric" };

class Newslist extends React.Component {

    render() {

          if (!this.props.posts || !this.props.posts.length) {
              return <div></div>;
          }

          var posts = this.props.posts.map(function(post) {
              var date = new Date(post.created_at).toLocaleDateString("en-us", options);
              var content = post.content.substring(0, 500);

              return (
                 <NavLink to={"post/" + post.id} key={post.id}>
                    <div className="newslist-post">
                        <h2>{post.title}</h2>
                        <h3 className="meta-data">Written by {post.author} on {date}</h3>
                        <div className="content">{content}</div>
                    </div>
                 </NavLink>
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
