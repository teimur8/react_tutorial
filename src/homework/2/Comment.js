import React, { Component } from "react";

class Comment extends Component {
  handelDelete = event => {
    this.props.onDelete(this.props.id);
  };

  render() {
    return (
      <ul>
        {this.props.text} <span onClick={this.handelDelete}>X</span>
      </ul>
    );
  }
}

export default Comment;
