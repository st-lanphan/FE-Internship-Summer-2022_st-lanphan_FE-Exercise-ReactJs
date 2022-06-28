function ListTodo(props) {
  return (
    <ul className="list-todo">
      {props.todoList.map((job, index) => (
        <li className="list-item" key={index}>
          <span className="content">{job}</span>
          <button
            className="btn btn-secondary"
            onClick={ () => {
              props.removeTodo(index);
          }}>X</button>
        </li>
      ))}
    </ul>
  );
}
export default ListTodo;