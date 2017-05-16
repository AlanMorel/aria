import React from 'react';
import Config from '../../../Config';

class Edit extends React.Component {

    constructor(props) {
        super(props);

        this.newPostTitleChange = this.newPostTitleChange.bind(this);
        this.newPostCategoryChange = this.newPostCategoryChange.bind(this);
        this.newPostContentsChange = this.newPostContentsChange.bind(this);

        this.state = {
            title: "",
            category: "",
            contents: ""
        };
    }

    newPostTitleChange(event) {
        this.setState({title: event.target.value});
    }

    newPostCategoryChange(event) {
        this.setState({category: event.target.value});
    }

    newPostContentsChange(event) {
        this.setState({contents: event.target.value});
    }

    componentDidMount() {

    }

    render() {
        var news = ["All", "General", "Announcement", "Update", "Event", "Community"];
        var selections = news.map(function(category) {
            return (
                <option key={category}>{category}</option>
            );
        });

        return (
            <div className="edit-post">
                <h2 className="edit-post-title">{this.props.title}</h2>
                <div className="new-post-section">
                    <label>Category: </label>
                    <select onChange={this.newPostCategoryChange} value={this.props.post.type}>
                        {selections}
                    </select>
                </div>
                <div className="new-post-section">
                    <label>Title: </label>
                    <input type="text" onChange={this.newPostTitleChange} value={this.props.post.title}></input>
                </div>
                <div className="new-post-section">
                    <label>Contents: </label>
                    <textarea onChange={this.newPostContentsChange} value={this.props.post.content}></textarea>
                </div>
                <div onClick={this.submitPost}>Submit Post</div>
            </div>
        );
    }
}

export default Edit;
