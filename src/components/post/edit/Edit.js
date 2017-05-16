import React from 'react';
import Config from '../../../Config';

class Edit extends React.Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
        this.newPostTitleChange = this.newPostTitleChange.bind(this);
        this.newPostTypeChange = this.newPostTypeChange.bind(this);
        this.newPostContentChange = this.newPostContentChange.bind(this);

        this.state = {
            title: this.props.post.title,
            type: this.props.post.type,
            content: this.props.post.content
        };
    }

    newPostTitleChange(event) {
        this.setState({title: event.target.value});
    }

    newPostTypeChange(event) {
        this.setState({type: event.target.value});
    }

    newPostContentChange(event) {
        this.setState({content: event.target.value});
    }

    submit() {
        var data = {
            'title': this.state.title,
            'type': this.state.type,
            'content': this.state.content
        }
        this.props.submit(data);
    }

    render() {
        var news = ["All", "General", "Announcement", "Update", "Event", "Community"];
        var selections = news.map(function(type) {
            return (
                <option key={type}>{type}</option>
            );
        });

        return (
            <div className="edit-post">
                <h2 className="edit-post-title">{this.props.title}</h2>
                <div className="new-post-section">
                    <label>Type: </label>
                    <select onChange={this.newPostTypeChange} defaultValue={this.state.type}>
                        {selections}
                    </select>
                </div>
                <div className="new-post-section">
                    <label>Title: </label>
                    <input type="text" onChange={this.newPostTitleChange} value={this.state.title}></input>
                </div>
                <div className="new-post-section">
                    <label>Content: </label>
                    <textarea onChange={this.newPostContentChange} value={this.state.content}></textarea>
                </div>
                <div className="submit-post" onClick={this.submit}>Submit Post</div>
            </div>
        );
    }
}

export default Edit;
