import edit from './assets/edit.png'
import trash from './assets/trash.png'
import check from './assets/check.png'


export default function Task({todoprops, deleteTask, toggleComplete}){

     const {name, id, completed} = todoprops
     return(
          <div className="task">
              <p className= {completed ? "task-done" : ""}>{name}</p>
               <div className="icon-row">
                    <img src={check} className="icon2" alt="check" onClick={() => toggleComplete(id, completed)} />
                    <img src={edit} className="icon2" alt="edit" />
                    <img src={trash} className="icon2" alt="delete" onClick={() => deleteTask(id)} />
               </div>
          </div>
     )
}

