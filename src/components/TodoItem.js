import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onClick={(evt) => this.props.onToggle(this.props.id)}
          />
          <label>{this.props.title}</label>
          <button
            onClick={(evt) => this.props.delete(this.props.id)}
            className="destroy"
          />
        </div>
      </li>
    );
  }
}

export default TodoItem;
