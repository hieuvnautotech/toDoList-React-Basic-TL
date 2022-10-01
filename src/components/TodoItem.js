import React from 'react'
import Todos from './Todos'

const TodoItem = props => {
    const todo = props.todoProps

    //style
    const todoItemStyle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: todo.completed ? 'line-through':'none',
    }
    //delete button style
    const deleteButtonStyle = {
        background: '#ff0000',
        color: 'none',
        border: 'none',
        padding: '5px, 9px',
        borderRadius: '50px',
        cursor: 'pointer',
        float: 'right'
    }
  return (
    <p style={todoItemStyle}>
        <input type={'checkbox'}></input>
        {todo.title}
        <button style={deleteButtonStyle}>Delete</button>
    </p>
  )
}

export default TodoItem