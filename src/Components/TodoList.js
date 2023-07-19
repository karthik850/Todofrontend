import React, { useEffect, useState } from 'react'
import CreateTodo from './CreateTodo'
import axios from "axios";
import Button from './Button';
import getCookie from './getCookie';
function TodoList(props) {
    const [todos,setTodos]=useState([])
    const [error,setError] = useState('')
    const [todo,setTodo]=useState("")
    let url="https://karthikreddy567.pythonanywhere.com/todo"
    useEffect(()=>{
        getTodos()
    },[props.url])
    const getTodos=()=>{
        axios.get(props.url).then(data => {
            setTodos(data.data)   
        }).catch((err)=>{
            setError(err)
        })
    }
    const deleteTodo=(id)=>{
        var csrftoken =getCookie('csrftoken')
        
        fetch(url+'/deleteTodo/'+id,{
            method: 'DELETE',
            headers: {"Content-Type": "application/json",
                    'X-CSRFToken':csrftoken}
        }).then((post) => {
    
            getTodos()
            
        })
    }
    
    const completeTodo=(id)=>{
        var csrftoken =getCookie('csrftoken')
        const updated={'completed':true}
        fetch(url+'/completeTodo/'+id+"/",{
            method: 'PUT',
            headers: {"Content-Type": "application/json",
                    }
        }).then((post) => {
    
            getTodos()
            
        })
    }

    return (
        <div className="container">
            <div class="row">
        <div className="col-12" style={{paddingTop:"10px"}}>
            <CreateTodo getTodos={getTodos}/>
            <Button />
            <br />
        </div>
        </div>
        {error && <div>{error}</div>}
        {todos && todos.length!==0 ? Object.values(todos).map(input => {
          return(
        //   <div key={input.id} className="todoItem">
        
          <li className="list-group-item justify-content-between  todoItem">
              <div className="row">
                  <div className="col-8">
                {input.completed ? <s>{input.todo}</s>:<p>{input.todo}</p>}
                </div>
                <div className="col-4 btn-toolbar justify-content-end" role="group" aria-label="Basic example">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" className="btn btn-danger changeButton" onClick={(e)=>deleteTodo(input.id)}>Delete</button>
                    </div>
                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                        {input.completed ? null:
                        <button type="button" className="btn btn-warning changeButton" onClick ={(e)=>completeTodo(input.id)}>Done</button>}
                        
                </div>
                </div>
                </div>
                
        </li>
           
        )  
        }):
        <div><li className="list-group-item d-flex justify-content-between align-items-center">
        No items
</li></div>}
        
      
      </div>
    )
}

export default TodoList
