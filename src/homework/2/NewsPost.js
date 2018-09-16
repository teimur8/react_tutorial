import React, { Component } from "react";
import Comment from "./Comment";

let id = 0;
let getId = () => {
  id++;
  return id;
};

class NewsPost extends Component {
  state = {
    value: "",
    comments: []
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      this.newComment();
    }
  };

  handleDelete = id => {
    this.setState(state => ({
      comments: state.comments.filter(comment => id !== comment.id)
    }));
  };

  newComment = () => {
    let text = this.state.value;

    if (text.length <= 0) return;

    const comment = {
      text: text,
      id: getId()
    };

    this.setState(state => ({
      value: "",
      comments: [...state.comments, comment]
    }));
  };

  render() {
    const { text } = this.props;

    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <p>{text}</p>
        <ul>
          {this.state.comments.map(item => (
            <Comment
              key={item.id}
              id={item.id}
              text={item.text}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default NewsPost;
