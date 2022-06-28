import ListTodo from "./ListTodo";
import FormTodo from "./FormTodo";
import {useState} from "react";
const listKeys = {
  todoList: 'jobs'
}

function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

function getStorage(key) {
  return JSON.parse(localStorage.getItem(key));
};
function TodoApp() {
  const [job, setJob] = useState('');
  const [jobs,setJobs] = useState(() => {
    const storageJobs = getStorage(listKeys.todoList)  ;
    return storageJobs ?? [];
  });

  const handleSubmit = (e) => {
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
        addTodo = {handleSubmit}
        todoItem = {job}
        setTodo = {setJob}
        />
        <ListTodo
        removeTodo = {handleRemove}
        todoList = {jobs}
        todoItem = {job}
        />
      </div>
    
    </div>
  );
}

export default TodoApp;