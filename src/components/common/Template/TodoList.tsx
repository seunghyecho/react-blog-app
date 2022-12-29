import TodoListItem from '@/components/common/Template/TodoListItem';
import { TodoT } from '@/types/todo';
import React from 'react';

interface Props {
  todos: Array<TodoT>;
  handleRemove: (id: number) => void;
  handleToggle: (id: number) => void;
}

function TodoList({ todos, handleRemove, handleToggle }: Props) {
  return (
    <>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          handleRemove={handleRemove}
          handleToggle={handleToggle}
        />
      ))}
    </>
  );
}

export default React.memo(TodoList);