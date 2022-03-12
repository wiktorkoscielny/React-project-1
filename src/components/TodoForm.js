import React from 'react'
import './TodoForm.css'
const TodoForm = (props) => {
    // console.log(props)
    return (
        <div className='main-app'>
            <form
                onSubmit={(event) => props.handleSubmit(event)}
            >
                <div className="form-group"
                style={{width: '80%', marginLeft: '10%'}}
                >
                    <label htmlFor=""></label>
                    <p class='form-style' style={{marginTop: '1rem', marginBottom: '.5rem'}}>First Name :</p>
                    <input
                        type="text"
                        name="todo" id="todo" className="form-control" placeholder="Enter todo"
                        value={props.name1}
                        onChange={(e) => props.handleOnChange(e, 'name1')}
                    />
                    <p class='form-style'style={{marginTop: '1rem', marginBottom: '.5rem'}}>Last Name :</p>
                    <input
                        type="text"
                        name="todo" id="todo" className="form-control" placeholder="Enter todo"
                        value={props.name2}
                        onChange={(e) => props.handleOnChange(e, 'name2')}
                    />
                    <p class='form-style' style={{marginTop: '1rem', marginBottom: '.5rem'}}>Department :</p>
                    <select 
                        name="todo" id="todo" className="form-control" placeholder="Enter todo" 
                        onChange={(e) => props.handleOnChange(e, 'name3')}
                        value={props.name3}>
                        <option value="IT">IT</option>
                        <option value="Sales">Sales</option>
                        <option value="Administration">Administration</option>
                    </select>
                    <p class='form-style' style={{marginTop: '1rem', marginBottom: '.5rem'}}>Salary :</p>
                    <input
                        type="number"
                        name="todo" id="todo" className="form-control" placeholder="Enter todo"
                        value={props.name4}
                        onChange={(e) => props.handleOnChange(e, 'name4')} 
                    />
                </div>
                <button className="btn btn-primary" type="submit" style={{width: '80%', marginLeft: '10%'}}>Add</button>
            </form>

        </div>
    )
}

export default TodoForm