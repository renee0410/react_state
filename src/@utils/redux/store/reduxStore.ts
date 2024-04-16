import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from '@/@utils/redux/slice/todosSlice';

export interface RootState {
  todos: ReturnType<typeof TodoReducer>;
}

// rootReducer：用來將所有的 reducers 匯集在一起
const rootReducer = {
  todos: TodoReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
