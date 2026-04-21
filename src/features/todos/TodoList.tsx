import { useGetTodosQuery } from "./todosApi";

export function TodoList() {
  const { data, isLoading, isError } = useGetTodosQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  return (
    <ul>
      {data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
