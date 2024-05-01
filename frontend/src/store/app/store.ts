import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { listsApi } from "../features/listsSlice";
import { tasksApi } from "../features/tasksSlice";
import modalReducer from "../features/modalSlice";

export const store = configureStore({
  reducer: {
    [listsApi.reducerPath]: listsApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(listsApi.middleware)
      .concat(tasksApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
