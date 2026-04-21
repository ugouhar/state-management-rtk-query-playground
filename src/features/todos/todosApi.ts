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
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "/todos",
    }),
    getTodoById: builder.query<Todo, number>({
      query: (id) => `/todos/${id}`,
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
