import React, { useState } from 'react';
import {Router} from 'react-router-dom'
import { IItem } from './types/todo';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App: React.FC = () => {

  const [todos, setTodos] = useState<IItem[]>([]);

  function todoAddHandler(todo: IItem) {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random().toString(), title: todo.title
        }
      ]
    })
  }

  function todoRemoveHandler(id: string) {
    setTodos(prevTodos => {
      return prevTodos.filter(item => {
        return item.id !== id;
      })
    })
  }

  return (
    <div className="App">

      <AddTodo onAddTodo={todoAddHandler} /> 
      <TodoList todos={todos} onRemoveTodo={todoRemoveHandler} />
    </div>
  );
}

console.log(Router)

export default App;
 