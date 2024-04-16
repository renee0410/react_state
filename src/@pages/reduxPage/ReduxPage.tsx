import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTodo, deleteTodo, Todo } from '@/@utils/redux/slice/todosSlice';
import { RootState } from '@/@utils/redux/store/reduxStore';
import { Plus, X } from '@phosphor-icons/react';

const ReduxPage = () => {
  // const [todoItems, setTodoItems] = useState<Todo[]>([{ id: 1, text: 'Learn React' }]);
  const [newTodoText, setNewTodoText] = useState<string>('');
  const dispatch = useDispatch();

  const todos = useSelector((state: RootState) => state.todos);

  console.log(todos);

  const addTodo = () => {
    dispatch(
      createTodo({
        id: todos.length + 1,
        text: newTodoText,
      }),
    );
    setNewTodoText('');

    // setTodoItems([...todoItems, { id: todoItems.length + 1, text: newTodoText }]);
  };

  const removeTodo = (id: number) => {
    dispatch(deleteTodo({ id }));
    // const newTodoItems = todoItems.filter((todo) => todo.id !== id);
    // setTodoItems(newTodoItems);
  };

  return (
    <>
      <div className='flex h-screen flex-col p-9'>
        {/* Input */}
        <div className='flex items-center gap-2'>
          <div className='w-full'>
            <input
              type='text'
              placeholder='Add a new task...'
              className='w-full rounded-md border border-gray-200 py-3 pe-4 ps-6 focus:border-blue-500 focus:ring-blue-500'
              onChange={(e) => setNewTodoText(e.target.value)}
              value={newTodoText}
            />
          </div>
          <div>
            <button className='size-12 rounded-md border border-gray-200' onClick={addTodo}>
              <Plus size={24} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
            </button>
          </div>
        </div>

        {/* Todo List */}
        <div className='mt-10 flex min-h-[120px] flex-col divide-y divide-gray-200 overflow-y-auto rounded-md border border-gray-200 p-6'>
          {/* Todo items */}
          {todos.length > 0 &&
            todos.map((todo: Todo) => {
              return (
                <div className='flex items-center justify-between' key={todo.id}>
                  <div className='p-4'>{todo.text}</div>
                  <button
                    className='size-6 rounded-md border border-gray-200'
                    onClick={() => {
                      if (todo.id !== null) {
                        removeTodo(todo.id);
                      }
                    }}>
                    <X size={16} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ReduxPage;
