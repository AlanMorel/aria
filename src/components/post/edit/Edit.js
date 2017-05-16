import React from 'react';
import Config from '../../../Config';

class Edit extends React.Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
        this.newPostTitleChange = this.newPostTitleChange.bind(this);
        this.newPostCategoryChange = this.newPostCategoryChange.bind(this);
        this.newPostContentChange = this.newPostContentChange.bind(this);

        this.state = {
            title: "",
            category: "",
            content: ""
        };
    }

    newPostTitleChange(event) {
        this.setState({title: event.target.value});
    }

    newPostCategoryChange(event) {
        this.setState({category: event.target.value});
    }

    newPostContentChange(event) {
        this.setState({content: event.target.value});
    }

    componentDidMount() {

    }

    submit() {
        console.log("SUBMITTING POST");
        var data = {
            'title': this.state.title,
            'category': this.state.category,
            'content': this.state.content
        }
        console.log(data);
        this.props.submit(data);
        console.log("SUBMITTING POST2");
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
                    <label>Content: </label>
                    <textarea onChange={this.newPostContentChange} value={this.props.post.content}></textarea>
                </div>
                <div onClick={this.submit}>Submit Post</div>
            </div>
        );
    }
}

export default Edit;
