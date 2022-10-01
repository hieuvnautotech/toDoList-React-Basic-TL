import React, { Fragment, useState } from 'react'
import TodoItem from './TodoItem'

const Todos = () => {
    const [toDoState, setToDoState] = useState([
        {
            title: 'Việc 1',
            completed: true
        },
        {
            title: 'Việc 2',
            completed: false
        },
        {
            title: 'Việc 3',
            completed: false
        },
    ])
  return (
    <Fragment>
        {
            toDoState.map(todo => {
                return <TodoItem todoProps={todo}/>
            })
        }
    </Fragment>

  )
}

export default Todos