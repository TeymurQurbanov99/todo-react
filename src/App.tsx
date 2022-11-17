import React, {FC, useState} from 'react';
import './App.css';

const App: FC = () => {

  const [task, setTask] = useState<string>("")

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
        <input type="text" placeholder="Task..."/>
        <div> <input type="number" placeholder="Deadline (in days)" /></div> 
        </div>
        <button>Add Task</button>
        
      </div>
      <div className="todoList"></div>
      </div>
  );
}

export default App;
