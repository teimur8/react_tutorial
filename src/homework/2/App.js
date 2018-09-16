import React, { Component } from "react";
import NewsPost from "./NewsPost";
import "./App.css";

let id = 0;
let getId = () => {
  id++;
  return id;
};

class App extends Component {
  state = {
    news: [],
    newsInput: ""
  };

  newPost = () => {
    let text = this.state.newsInput;

    if (text.length <= 0) return;

    const post = {
      text: text,
      id: getId()
    };

    this.setState(state => ({
      news: [...state.news, post],
      newsInput: ""
    }));
  };

  handleChange = event => {
    this.setState({ newsInput: event.target.value });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      this.newPost();
    }
  };

  render() {
    const { news } = this.state;

    return (
      <div className="container">
        <h3>Add post:</h3>
        <input
          type="text"
          value={this.state.newsInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <div className="App">{}</div>
        <h3>News:</h3>
        <div className="news">
          {news.map(item => (
            <NewsPost key={item.id} text={item.text} id={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
