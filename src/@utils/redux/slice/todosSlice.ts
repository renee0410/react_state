import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text?: string;
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [{ id: 1, text: 'Learn React' }],

  // 狀態管理器（方法）
  reducers: {
    createTodo(state: Todo[], action: PayloadAction<Todo>) {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

// 定義的 reducers 可以使用 actions 來匯出（具名匯出）
export const { createTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
