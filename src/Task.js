import edit from './assets/edit.png'
import trash from './assets/trash.png'
import check from './assets/check.png'
import ok2 from './assets/ok2.png'
import x from './assets/x.png'
import { useState } from 'react'


export default function Task({todoprops, deleteTask, toggleComplete, todos, setTodos}){
     const {name, id, completed} = todoprops
     const [editing, setEditing] = useState(false);
     const [copyOfTask, setCopyOfTask] = useState(name)


     function toggleEditing(){
          setEditing(!editing)
     }



     function handleEdit(id){
          setTodos(currentTodos => {
              return currentTodos.map(currentTodo => {
                    if(currentTodo.id === id){
                         return {id: id, name: copyOfTask, completed: completed}
                    }

                    return currentTodo
               })
          })

     }

   

     
     return(
          <div className="task">
               {
                    editing ?
                    <form className="edit-row">
                         <input className="edit-input" type="text" value={copyOfTask} onChange={(e) => setCopyOfTask(e.target.value)} />
                         <div className="edit-btn-row">
                              <button className="btn" type="button" onClick={() => toggleEditing()}><img className="icon3" src={x} /></button>
                              <button className="btn" onClick={() => {handleEdit(id); toggleEditing()}}><img className="icon3" src={ok2} /></button>
                         </div>   
                    </form>
               :
               <>
              <p className= {completed ? "task-done" : ""}>{name}</p>
               <div className="icon-row">
                    <img src={check} className="icon2" alt="check" onClick={() => toggleComplete(id)} />
                    <img src={edit} className="icon2" alt="edit" onClick={() => toggleEditing()} />
                    <img src={trash} className="icon2" alt="delete" onClick={() => deleteTask(id)} />
               </div>
               </>
               }
          </div>
     )
}