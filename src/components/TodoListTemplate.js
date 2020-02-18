import React, {Component} from 'react'
import './TodoListTemplate.scss'

class TodoListTemplate extends Component {
  render() {
    return (
      <main className="todo-list-template">
        <div className="title">
          오늘의 할 일
        </div>
        <section className="form-wrapper">
          {this.props.form}
        </section>
        <section className="todos-wrapper">
          {this.props.children}
        </section>
      </main>
    );
  }
}

export default TodoListTemplate;