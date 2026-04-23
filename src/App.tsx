import { AddTodo } from "./features/todos/AddTodo";
import { DeleteTodo } from "./features/todos/DeleteTodo";
import { TodoList } from "./features/todos/TodoList";
import "./App.css";
import { LazyPost, Post } from "./features/posts/Post";

function App() {
  return (
    <>
      <h1>RTK Query Playground 🚀</h1>
      <AddTodo />
      <DeleteTodo />
      <Post />
      <LazyPost />
      <TodoList />
    </>
  );
}

export default App;
