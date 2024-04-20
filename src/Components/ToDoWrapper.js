import React, {useState} from 'react'
import ToDoForm from './ToDoForm';
import {v4 as uuidv4} from 'uuid';
import ToDo from './ToDo';
uuidv4();

const ToDoWrapper = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  }

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <ToDo task={todo} key={index} toggleComplete={toggleComplete} />
      ))}
    </div>
  )
}

export default ToDoWrapper;