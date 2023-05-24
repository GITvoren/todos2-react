import './App.css';
import add from './assets/add.png'
import Task from './Task.js'
import {useState, useEffect} from 'react'

function App(){

    const [newTask, setNewTask] = useState("")
    const [todos, setTodos] = useState(() => {
      const localValue = localStorage.getItem('task')
      if(localValue == null) return []

      return JSON.parse(localValue)
    })

    console.table(todos)

  
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

    function toggleComplete(id){
      setTodos(currentTodos => {
        return currentTodos.map(currentTodo => {
          if(currentTodo.id === id){
            return {...currentTodo, completed: !currentTodo.completed}
          }

          return currentTodo

        })
      })
    }

  return (
    <div className="App">
        <div className="todo">
            <h2>To Do's App</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="Enter new task" className="add-input" />
              <button className="btn"><img src={add} className="icon" /></button>
            </form>
            <hr />
            <div className="task-list">
             {todos.length === 0 &&<div className="empty">Yay! No Task!</div>}

            {
            todos.map(todo => {
                return <Task key = {todo.id} todoprops = {todo} deleteTask={deleteTask} toggleComplete={toggleComplete} todos={todos} setTodos={setTodos} />
              })
            }  
            </div>
        </div>
    </div>
  );
}

export default App;
