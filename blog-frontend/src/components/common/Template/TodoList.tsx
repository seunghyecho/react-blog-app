import { List } from 'react-virtualized';
import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import { TodoT } from '../../../types/todo';


interface Props {
  todos: Array<TodoT>;
  handleRemove: (id: number) => void;
  handleToggle: (id: number) => void;
}

function TodoList({ todos, handleRemove, handleToggle }: Props) {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          key={key}
          todo={todo}
          handleRemove={handleRemove}
          handleToggle={handleToggle}
          style={style}
        />
      );
    }, [todos, handleRemove, handleToggle],
  );

  return(
    <List
      clssName="TodoList"
      width={213}
      height={230}
      rowCount={todos.length}
      rowHeight={50}
      rowRenderer={rowRenderer}
      list={todos}
      style={{outline:'none'}}
    />
  )

}

export default React.memo(TodoList);