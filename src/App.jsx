
import { useEffect, useState } from 'react'
import Todo from './components/Todo'
import { addTodo, deleteTodo, getAllTodo, updateTodo } from './utils/HandleApi'
import './App.css'


function App() {

  const [todo, setTodo] = useState([])
  const [text, setText] = useState("");
  const [isupdate, setIsUpdate] = useState(false);
  const [todoId, setTodoId] = useState("");


  useEffect(() => {
    getAllTodo(setTodo);
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdate(true);
    setText(text)
    setTodoId(_id);
  }
  return (
    <div className='App'>
     
      <div className="container">
        
        <h1>Todo App</h1>
        <div className='top'>
          <div className="form__group field">
            <input type="text"
               placeholder='Add Todo'
              id='name'
              className='form__field'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <label htmlFor="name" className="form__label">{isupdate?"Update":"Add Todo"}</label>
          </div>

          <button className="add-btn" onClick={isupdate ? () => updateTodo(text, setText, todoId, setTodo, setIsUpdate) : () => addTodo(text, setText, setTodo)}>
            {isupdate ? "Update" : "Add"}
          </button>

          

        </div>
        <div className='list'>
          {todo.map(item => <Todo
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteTodo={() => deleteTodo(item._id, setTodo)}
          />)}
        </div>
      </div>


    </div>
  )
}

export default App
