import './App.css';
import add from './assets/add.png'
import edit from './assets/edit.png'
import trash from './assets/trash.png'
import check from './assets/check.png'

function App(){
  return (
    <div className="App">
        <div className="todo">
            <h2>To Do's App</h2>
            <form>
              <input type="text" />
              <img src={add} className="icon" alt="add" />
            </form>
            <hr />
            <div className="task-list">
                <div className="task">
                    <p>description of tasn of tasn of tasn of task</p>
                    <div className="icon-row">
                      <img src={check} className="icon2" alt="check" />
                      <img src={edit} className="icon2" alt="edit" />
                      <img src={trash} className="icon2" alt="delete" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
