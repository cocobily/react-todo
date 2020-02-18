import React, { Component } from 'react'
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import './App.css';
import TodoItemList from './components/TodoItemList';


class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form></Form>}>
        <TodoItemList></TodoItemList>
      </TodoListTemplate>
    )
  }
}

export default App;
