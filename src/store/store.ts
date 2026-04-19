import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // API slice reducers will be registered here as we build them
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
