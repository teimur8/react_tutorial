import React, { Component } from "react";
import "./index.css";

let id = 0;
let getId = () => {
  id++;
  return id;
};

class App extends Component {
  state = {
    valueInput: "",
    tasks: [
      {
        id: 0,
        text: "Задача 1",
        done: false
      }
    ]
  };

  onChangeHandler = event => {
    this.setState({ valueInput: event.target.value });
  };
  onKeyDownHandler = event => {
    if (event.keyCode === 13) {
      const { valueInput, tasks } = this.state;
      const newTask = { text: valueInput, done: false, id: getId() };

      if (valueInput.length < 2) return;

      this.setState({ valueInput: "", tasks: [...tasks, newTask] });
    }
  };

  onChangeCheckboxHandler = id => {
    this.setState(state => ({
      tasks: state.tasks.map(
        task => (id === task.id ? { ...task, done: !task.done } : task)
      )
    }));
  };
  onDeleteHandler = id => {
    this.setState(state => ({
      tasks: state.tasks.filter(task => id !== task.id)
    }));
  };

  render() {
    const { valueInput, tasks } = this.state;

    return (
      <div className="container">
        <input
          value={valueInput}
          onChange={this.onChangeHandler}
          onKeyDown={this.onKeyDownHandler}
          className="input"
        />
        {tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            done={task.done}
            text={task.text}
            onChange={this.onChangeCheckboxHandler}
            onDelete={this.onDeleteHandler}
          />
        ))}
      </div>
    );
  }
}

class Task extends Component {
  onChangeHandler = () => {
    const { id, onChange } = this.props;
    onChange(id);
  };
  onDeleteHandler = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  render() {
    const { text, done } = this.props;

    return (
      <div>
        <input type="checkbox" checked={done} onChange={this.onChangeHandler} />
        <span>{text}</span>
        <span className="deleteBtn" onClick={this.onDeleteHandler}>
          X
        </span>
      </div>
    );
  }
}

export default App;
