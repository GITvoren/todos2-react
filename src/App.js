import './App.css';
import add from './assets/add.png'
import Task from './Task.js'
import {useState, useEffect} from 'react'

function App(){

    const [newTask, setNewTask] = useState("")
    const [todos, setTodos] = useState([])

    console.table(todos)

   useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('task')))
   }, [])

    useEffect(() => {
      localStorage.setItem('task', JSON.stringify(todos))
    }, [todos])

    function handleSubmit(e){
      e.preventDefault();

      if(newTask.trim().length !== 0){
           setTodos(currentTodos => {
          return [...currentTodos, {id: crypto.randomUUID(), name: newTask, completed:false}]
        })
      }
      
      setNewTask("")

    }


    function deleteTask(id){
        setTodos(currentTodos => {
          return currentTodos.filter(currentTodo => id !== currentTodo.id)
        })
    }

  return (
    <div className="App">
        <div className="todo">
            <h2>To Do's App</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />
              <button className="btn"><img src={add} className="icon" /></button>
            </form>
            <hr />
            <div className="task-list">
              {todos.length === 0 && <div className="empty">Yay! No Task!</div>}
              {todos.map(todo => {
                return <Task key = {todo.id} todoprops = {todo} deleteTask={deleteTask} />
              })}
                
            </div>
        </div>
    </div>
  );
}

export default App;
