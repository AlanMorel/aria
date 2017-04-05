import React from 'react';

class Newslist extends React.Component {

    render() {

        if (!this.props.posts.length) {
            return <div></div>;
        }

        var posts = this.props.posts.map(function(post) {
            return (
                <div key={post.id}>
                    <li>{post.author}</li>
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
