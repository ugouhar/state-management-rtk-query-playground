import { AddTodo } from "./features/todos/AddTodo";
import { DeleteTodo } from "./features/todos/DeleteTodo";
import { TodoList } from "./features/todos/TodoList";

function App() {
  return (
    <>
      <h1>RTK Query Playground 🚀</h1>
      <AddTodo />
      <DeleteTodo />
      <TodoList />
    </>
  );
}

export default App;
