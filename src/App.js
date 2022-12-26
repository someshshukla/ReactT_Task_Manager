import React, { useState } from "react";
import TaskList from "./TaskList";
const App = () => {
  const [inputList, setInputList] = useState();
  const [Tasks, setTasks] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfTasks = () =>{
setTasks((oldTasks) => {
    return[...oldTasks, inputList];
    });
  };
  const deleteTask = (id) => {
        console.log("deleted");

        setTasks((oldTasks) => {
          return oldTasks.filter((arrElem, index) => {
            return index !== id;
          });
        });
    };


  return (
    <>
    <div className='centralDiv'>
      <div className='todoDiv'>
      <br />
      <h1>Tasks</h1>
      <br />
      <input type="text" placeholder="Add a task" name="" id="" onChange={itemEvent} />
      <button onClick={listOfTasks}> + </button>
      <ol>
        {             }

       { Tasks.map((taskval, index) => {
          
         return <TaskList 
         key = {index}
         id = {index} text = {taskval}
         onSelect={deleteTask}/>;
        })}



      </ol>
      </div>
    </div>
    </>
  );
};

export default App;
