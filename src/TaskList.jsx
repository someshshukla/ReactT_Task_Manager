import React from "react";

const TaskList = (props) => {
    


    return ( 
    
    <>
    <div className="task_style">
        <i className="fa fa-times" 
        aria-hidden="true" 
        onClick={() => {
         props.onSelect(props.id);
         }}/>
        <li> {props.text}</li>
    </div>
    </>
    
    
    );
};


export default TaskList;