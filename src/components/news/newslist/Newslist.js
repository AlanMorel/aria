import React from 'react';
import { NavLink } from 'react-router-dom';

var options = { month: "short", day: "numeric" };

class Newslist extends React.Component {

    render() {
          var posts = this.props.posts.map(function(post) {
              var date = new Date(post.created_at).toLocaleDateString("en-us", options);
              var content = post.content.substring(0, 250) + "...";

              return (
                 <NavLink to={"post/" + post.id} key={post.id}>
                    <div className="newslist-post">
                        <div className="newslist-image">
                            <img src="/images/background.png" alt=""/>
                        </div>
                        <div className="newslist-information">
                            <h2>{post.title}</h2>
                            <h3 className="meta-data">Written by {post.author} on {date}</h3>
                            <div className="content">{content}</div>
                        </div>
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
