import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos , selectedTab  } = props;
  const filteredTodos =
    selectedTab === "All"
      ? todos
      : selectedTab === "Open"
      ? todos.filter((todo) => !todo.complete)
      : todos.filter((todo) => todo.complete);
    const findTodoIndex = (todo) => todos.indexOf(todo);
  return (
    <>
      {filteredTodos.map((todo, todoIndex) => {
        return <TodoCard  key={todoIndex} todo={todo} todoIndex={findTodoIndex(todo)} {...props} />;
      })}
    </>
  );
}
