import { MdAdd } from 'react-icons/md';
import { Form } from './Template.styled';
import React, { useCallback, useState } from 'react';

interface Props {
  handleInsert: (value:string) => void;
}

function TodoInsert({ handleInsert }: Props) {
  const [value, setValue] = useState('');

  const handleChange = useCallback(e => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  }, []);

  const handleSubmit = useCallback(e => {
    handleInsert(value);
    setValue('');

    e.preventDefault();
  }, [handleInsert, value]);


  return (
    <Form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='할 일을 입력해주세요.'
        value={value}
        onChange={handleChange}
      />
      <button type='submit'><MdAdd /></button>
    </Form>
  );
}

export default TodoInsert;