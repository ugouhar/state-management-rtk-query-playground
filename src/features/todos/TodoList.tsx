import { useState } from "react";
import { useGetTodosQuery } from "./todosApi";
import { TodoDetails } from "./TodoDetails";

export function TodoList() {
  const { data, isLoading, isError } = useGetTodosQuery();
  const [activeTodoId, setActiveTodoId] = useState(null);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  const handleActiveTodoId = (e, id: number) => {
    e.preventDefault();
    setActiveTodoId(id);
  };

  return (
    <div>
      {activeTodoId && <TodoDetails id={activeTodoId} />}
      <ul>
        {data?.map((todo) => (
          <li
            key={todo.id}
            onClick={(e) => handleActiveTodoId(e, todo.id)}
            className="todo-list-item"
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
