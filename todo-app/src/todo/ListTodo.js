function ListTodo(props) {
  return (
    <ul className="list-todo">
      {props.jobs.map((job, index) => (
        <li className="todo-item" key={index}>
          <span className="content">{job}</span>
          <button
            className="btn btn-secondary"
            onClick={ () => {
              props.removeJob(index);
          }}>X</button>
        </li>
      ))}
    </ul>
  );
}
export default ListTodo;
