import React from 'react'
import './TodoItem.css' 


const TodoItem = (props) => {

    return (
        <div className='worker-list'>
            
            
                <span 
                className={props.todo.done ? "done" : 'not-done'}>
                
                    <br />
                First Name: {props.todo.firstName}
                    <br />
                Last Name:  {props.todo.lastName}
                    <br />
                Department: {props.todo.department}
                    <br />
                Salary: {props.todo.salary}
                </span>
                    <br />             
                <span className="delete-todo">
                    <button
                        className="btn btn-danger btn-sm"
                        style={{width: '100%'}}
                        onClick={(event) => props.removeTodo()}
                    >
                        Delete
                    </button>
                </span>
           
            
        </div>
    )
}

export default TodoItem