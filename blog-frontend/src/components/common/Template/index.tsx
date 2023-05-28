import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import TodoInsert from '@/components/common/Template/TodoInsert';
import TodoList from '@/components/common/Template/TodoList';
import { Wrapper, TemplateBlock } from '@/components/common/Template/Template.styled';
import { TodoT } from '@/types/todo';
import TodoReducer from '@/hooks/useTodos';

interface Props {
  title: string;
  data: Array<TodoT>;
}

function Template({ title, data }: Props) {
  const targetRef = useRef(null);
  const [todos, dispatch] = useReducer(TodoReducer, data);
  const createId = useRef(31);

  const handleInsert = useCallback(
    title => {
      const newTodo = {
        id: createId.current,
        title,
        completed: false,
      };
      dispatch({ type: 'INSERT', newTodo });
      createId.current += 1;
    }, [],
  );

  const handleRemove = useCallback(
    id => {
      dispatch({ type: 'REMOVE', id });
    }, []);

  const handleToggle = useCallback(
    id => {
      dispatch({ type: 'TOGGLE', id });
    }, [],
  );

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  const handleScroll = ()=>{
    if(window.scrollY > 0){
      targetRef.current.style.position = "fixed";
      targetRef.current.style.top = "112px";
    }
  }

  return (
    <Wrapper>
    <TemplateBlock ref={targetRef}>
      <h2>{title}</h2>
      <div>
        <TodoInsert handleInsert={handleInsert} />
        <TodoList todos={todos} handleRemove={handleRemove} handleToggle={handleToggle} />
      </div>
    </TemplateBlock>
    </Wrapper>
  );
}

export default Template;
