function FormTodo(props) {
  const setJob = props.setJob;
  return (
    <form onSubmit={props.addJob} className="form-todo">
      <input
        type="text"
        id="input"
        placeholder="Title..."
        value={props.job}
        onChange={e => setJob(e.target.value)}
      />
      <button className="btn btn-add-todo btn-primary">
        Add
      </button>
    </form>
  );
}
export default FormTodo;
