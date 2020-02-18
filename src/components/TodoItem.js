import React, { Component } from 'react'
import './TodoItem.scss'

class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item" onClick={() => this.props.onToggle(this.props.id)}>
        <button className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          this.props.onRemove(this.props.id);
        }}>&times;</button>
        <div className={` todo-text ${this.props.checked ? ' checked' : ''}`}>
          <div>{this.props.text}</div>
        </div>
        {
          this.props.checked && (<div className="check-mark">✓</div>)
        }
      </div>
    )
  }
}

export default TodoItem
