import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from '@/@utils/redux/slice/todosSlice';

// rootReducer：用來將所有的 reducers 匯集在一起
const rootReducer = {
  todos: TodoReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
