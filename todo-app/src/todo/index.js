import {useState} from "react";
import ListTodo from "./ListTodo";
import FormTodo from "./FormTodo";
import { listKeys } from "../shared/constant";
import { setStorage, getStorage } from "../shared/common";

function TodoApp() {
  const [job, setJob] = useState('');
  const [jobs,setJobs] = useState(() => {
    const storageJobs = getStorage(listKeys.todoList)  ;
    return storageJobs ?? [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobs(prev => {
      const newJobs = [...prev,job];
      setStorage(listKeys.todoList,newJobs);
      return newJobs;
    })
    setJob('');
  }
  const handleRemove = (index) => {
    setJobs(prev => {
      const newPrev = [...prev];
      newPrev.splice(index,1);
      setStorage(listKeys.todoList,newPrev);
      return newPrev;

    })
  }
  
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="headline">Todo List</h1>
        <FormTodo
        addJob = {handleSubmit}
        job = {job}
        setJob = {setJob}
        />
        <ListTodo
        removeJob = {handleRemove}
        jobs = {jobs}
        />
      </div>
    
    </div>
  );
}

export default TodoApp;
