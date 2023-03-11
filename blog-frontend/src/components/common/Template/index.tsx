import React, { useCallback, useReducer, useRef, useState } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import { Layout, Content } from './Template.styled';
import { TodoT } from '../../../types/todo';
import TodoReducer from '../../../hooks/useTodos';

interface Props {
  title: string;
  data: Array<TodoT>;
}

/*
function createBulkTodos() {
  const array: Array<TodoT> = [];

  for (let i = 1; i <= 30; i++) {
    array.push({
      id: i,
      title: `todo ${i}`,
      completed: false,
    });
  }
  return array; //TODO 배열 리턴 !!
}
 */

function Template({ title, data }: Props) {

  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(TodoReducer, data);

  //TODO 고유값 id, ref에 변수 담기
  const createId = useRef(31);

  const handleInsert = useCallback(
    title => {
      const newTodo = {
        id: createId.current,
        title,
        completed: false,
      };

      /*
      // useState의 함수형 업데이트로 성능 최적화
      setTodos(todos => todos.concat(newTodo));
       */

      // useReducer
      dispatch({ type: 'INSERT', newTodo });
      createId.current += 1;
    }, [todos],
  );

  const handleRemove = useCallback(
    id => {

      /*
      // useState의 함수형 업데이트로 성능 최적화
      setTodos(todos => todos.filter(todo =>
        todo.id != id,
      ));
       */

      // useReducer
      dispatch({ type: 'REMOVE', id });
    }, [todos]);

  const handleToggle = useCallback(
    id => {

      /*
      // useState의 함수형 업데이트로 성능 최적화
      setTodos(todos =>
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
       */

      // useReducer
      dispatch({ type: 'TOGGLE', id });
    }, [todos],
  );

  return (
    <Layout>
      <h1>{title}</h1>
      <Content>
        <TodoInsert handleInsert={handleInsert} />
        <TodoList todos={todos} handleRemove={handleRemove} handleToggle={handleToggle} />
      </Content>
    </Layout>
  );
}

export default Template;
