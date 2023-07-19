import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import TodoList from './TodoList';

function Todos() {
    let endpoint="https://karthikreddy567.pythonanywhere.com/todo/"
    return (
        <BrowserRouter>
        <Navbar/>
     <Routes>
     
     <Route path="/" element={<TodoList url={endpoint+'todolist/'}/>} />
     <Route path="/completed" element={<TodoList url={endpoint+'completedTodoList/'}/>} />
     <Route path="/inpending" element={<TodoList url={endpoint+'inProgessTodoList/'}/>} />
   </Routes>
   </BrowserRouter>
    )
}

export default Todos
