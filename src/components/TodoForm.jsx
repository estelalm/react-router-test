import { useState } from 'react'
import React from 'react'

const TodoForm = () => {

    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

  return (
    <div className="todo-form">
    <h2>Criar tarefa</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite o título' value={value} onChange={(e) =>setValue(e.target.value)}/>
        <select>
            <option value="">Selecione a categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar</button>
    </form>
    </div>
  )
}

export default TodoForm