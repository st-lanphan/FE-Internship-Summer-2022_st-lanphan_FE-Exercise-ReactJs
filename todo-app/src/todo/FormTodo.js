function FormTodo(props) {
  const setJob = props.setTodo;
  return (
    <div className="heading">
      <input
        type="text"
        id="input"
        placeholder="Title..."
        value={props.todoItem}
        onChange={e => setJob(e.target.value)}
      />
      <button className="btn btn-add-todo btn-primary" onClick={props.addTodo}>
        Add
      </button>
    </div>
  );
}
export default FormTodo;