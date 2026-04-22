import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "../features/todos/todosApi";
import { postApi } from "../features/posts/postApi";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(todosApi.middleware)
      .concat(postApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
