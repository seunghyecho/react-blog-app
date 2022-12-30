
export default function TodoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);

    case 'REMOVE':
      return todos.filter(todo => todo.id != action.id);

    case 'TOGGLE':
      return todos.map(todo => todo.id === action.id ? {
        ...todo,
        completed: !todo.completed,
      } : todo);

    default:
      return todos;
  }
}
