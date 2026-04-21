import { store } from "../../store/store";
import { useGetTodoByIdQuery } from "./todosApi";

export function TodoDetails({ id }: { id: number }) {
  console.log(store.getState());

  const { data, isLoading, isError } = useGetTodoByIdQuery(id);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;
  if (!data) return null;

  return (
    <div key={data.id}>
      <h1>{data.title}</h1>
    </div>
  );
}
