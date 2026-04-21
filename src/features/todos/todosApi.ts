import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Todo"],
  keepUnusedDataFor: 60,
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "/todos",
      providesTags: [{ type: "Todo", id: "LIST" }],
    }),
    getTodoById: builder.query<Todo, number>({
      query: (id) => `/todos/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Todo", id }],
      keepUnusedDataFor: 10,
    }),
    addTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (newTodo) => ({
        url: "/todos",
        method: "POST",
        body: newTodo,
      }),
      invalidatesTags: [{ type: "Todo", id: "LIST" }],
    }),
    deleteTodo: builder.mutation<void, number>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Todo", id: "LIST" },
        { type: "Todo", id },
      ],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoByIdQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
