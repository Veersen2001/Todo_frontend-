import React from 'react'
import {BiEdit} from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai';
import './Todo.css'
function Todo({text,updateMode,deleteTodo}) {

  return (
    <div className='todo'>
        <div className="todo_text" >{text}</div>
        <div className="todo_icons">
            <BiEdit className='update_icon icon' onClick={updateMode}/>
            <span>|</span>
            <AiFillDelete className='delete_icon icon' onClick={deleteTodo}/>
        </div>
    </div>
    
  )
}

export default Todo