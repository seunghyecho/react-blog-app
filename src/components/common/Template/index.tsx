import React, { useCallback, useReducer, useRef, useState } from 'react';
import { Layout, Content } from '@/components/common/Template/Template.styled';
import TodoInsert from '@/components/common/Template/TodoInsert';
import TodoList from '@/components/common/Template/TodoList';
import { TodoT } from '@/types/todo';
import TodoReducer from '@/hooks/useTodos';

interface Props {
  title: string;
}

function createBulkTodos() {
  const array: Array<TodoT> = [];

  for (let i = 1; i <= 30; i++) {
    array.push({
      id: i,
      text: `todo ${i}`,
      checked: false,
    });
  }
  return array; //TODO 배열 리턴 !!
}

function Template({ title }: Props) {

  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(TodoReducer, undefined, createBulkTodos);

  //TODO 고유값 id, ref에 변수 담기
  const createId = useRef(31);

  const handleInsert = useCallback(
    text => {
      const newTodo = {
        id: createId.current,
        text,
        checked: false,
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