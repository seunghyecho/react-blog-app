import TodoListItem from '@/components/common/Template/TodoListItem';
import { Todo } from '@/components/common/Template/index';

interface Props {
  todos: Array<Todo>;
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

export default TodoList;