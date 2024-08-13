import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import TodoPage from './pages/TodoPage'

function App() {

  return (
    <>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/todo" element={<TodoPage />} />
    </Routes>
 </>

  )
}

export default App
