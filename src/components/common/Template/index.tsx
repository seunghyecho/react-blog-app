import React, { useCallback, useRef, useState } from 'react';
import { Layout, Content } from '@/components/common/Template/Template.styled';
import TodoInsert from '@/components/common/Template/TodoInsert';
import TodoList from '@/components/common/Template/TodoList';

interface Props {
  title: string;
}

function Template({ title }: Props) {

  const [todos, setTodos] = useState<Array<Todo>>([
    {
      id: 1,
      text: 'todo1',
      checked: true,
    },
    {
      id: 2,
      text: 'todo2',
      checked: true,
    },
    {
      id: 3,
      text: 'todo3',
      checked: false,
    }]);

  //TODO 고유값 id, ref에 변수 담기
  const createId = useRef(4);

  const handleInsert = useCallback(
    text => {
      const newTodo = {
        id: createId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(newTodo));
      createId.current += 1;
    }, [todos],
  );

  const handleRemove = useCallback(
    id => {
      setTodos(todos.filter(todo =>
        todo.id != id,
      ));
    }, [todos]);

  const handleToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    }, [todos],
  );
  console.log('todos???', todos);

  return (
    <Layout>
      <h1>{title}</h1>
      <Content>
        <TodoInsert handleInsert={handleInsert} />
        <TodoList todos={todos} handleRemove={handleRemove} handleToggle={handleToggle}/>
      </Content>
    </Layout>
  );
}

export default Template;


export interface Todo {
  id: number;
  text: string;
  checked: boolean;
}