import React from 'react'
import { useState } from 'react'
import Todo from '../components/Todo.jsx'
import TodoForm from '../components/TodoForm.jsx'
import NavBar from '../components/NavBar'

const TodoPage = () => {

    const [todos, setTodos] = useState([
        {
          id:1,
          text: "Levantar requisitos",
          category: "Trabalho",
          isCompleted: false,
        },
        {
          id:2,
          text: "Ir ao dentista",
          category: "Pessoal",
          isCompleted: false,
        },
        {
          id:3,
          text: "Estudar React",
          category: "Estudos",
          isCompleted: false,
        }
      ])
      
  return (
    <div className="app">
    <h1>Lista de tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo}/>
      ))}
    </div>
    <TodoForm />

    <NavBar></NavBar>
  </div>
  )
}

export default TodoPage