import { useAddTodoMutation } from "./todosApi";

export function AddTodo() {
  const [addTodo, { isLoading }] = useAddTodoMutation();

  const handleClick = () => {
    addTodo({ title: "New todo", completed: false });
  };

  return (
    <button onClick={handleClick} disabled={isLoading}>
      {isLoading ? "Adding..." : "Add Todo"}
    </button>
  );
}
