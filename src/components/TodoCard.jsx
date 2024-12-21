export function TodoCard(props) {
  const { todo } = props;
  const { handelDeleteTodo , todoIndex ,handelCompletedTodo} = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button disabled={todo.complete} onClick={() => handelCompletedTodo(todoIndex) }>
          <h6>Done</h6>
        </button>
        <button onClick={() => handelDeleteTodo(todoIndex) }>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
