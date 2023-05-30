import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { Form } from '@/components/common/Template/Template.styled';

function TodoInsert({ handleInsert }) {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setText('');
    handleInsert(text);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='할 일을 입력하세요.'
        value={text}
        onChange={(e)=> setText(e.target.value)}
      />
      <button type='submit'><MdAdd /></button>
    </Form>
  );
}

export default TodoInsert;