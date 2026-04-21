import { useDeleteTodoMutation } from "./todosApi";

export function DeleteTodo() {
  const [deleteTodo, { isLoading }] = useDeleteTodoMutation();

  const handleClick = () => {
    deleteTodo(1);
  };

  return (
    <button onClick={handleClick} disabled={isLoading}>
      {isLoading ? "Deleting..." : "Delete Todo"}
    </button>
  );
}
