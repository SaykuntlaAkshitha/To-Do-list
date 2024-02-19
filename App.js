import React, { useState } from 'react';
import './App.css';
import Todolist from './Todolist';

const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      const newTodos = [...todos, task];
      setTodos(newTodos);
      setTask('');
    }
  };
const deleteHandler=(indexValue)=>{
  const newTodos=todos.filter((todo,index)=>index !== indexValue);
  setTodos(newTodos);
}
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">To-Do List Application</h5>
            <form onSubmit={submitHandler}>
              <input  size="40" type="text" name="task" value={task} onChange={changeHandler} />&nbsp;&nbsp;
              <input type="submit" value="Add" name="Add" />
            </form>
            <Todolist todolist={todos} deleteHandler={deleteHandler} />
          </div>
        </div>
      </center>
    </div>
  );
};

export default App;
