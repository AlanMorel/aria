import React from 'react';

class Newslist extends React.Component {

    render() {

        if (!this.props.posts.length) {
            return <div></div>;
        }

        var posts = this.props.posts.map(function(post) {
            return (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <div>{post.author}</div>

                </div>
            );
        });

        console.log(posts);

        return (
            <section>
                {posts}
            </section>
        );
    }
}

export default Newslist;
