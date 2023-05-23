import edit from './assets/edit.png'
import trash from './assets/trash.png'
import check from './assets/check.png'


export default function Task({todoprops, deleteTask}){

     const {name, id} = todoprops
     return(
          <div className="task">
              <p>{name}</p>
               <div className="icon-row">
                    <img src={check} className="icon2" alt="check" />
                    <img src={edit} className="icon2" alt="edit" />
                    <img src={trash} className="icon2" alt="delete" onClick={() => deleteTask(id)} />
               </div>
          </div>
     )
}

