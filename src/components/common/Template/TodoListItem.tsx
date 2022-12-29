import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import { ListItem, CheckBox, RemoveBox } from '@/components/common/Template/Template.styled';
import { TodoT } from '@/types/todo';

interface Props {
  todo: TodoT;
  handleRemove: (id: number) => void;
  handleToggle: (id: number) => void;
}

function TodoListItem({ todo, handleRemove, handleToggle }: Props) {
  const { id, text, checked } = todo;

  return (
    <ListItem>
      <CheckBox
        className={checked && 'checked'}
        onClick={() => handleToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </CheckBox>
      <p>{text}</p>
      <RemoveBox onClick={() => handleRemove(id)}><MdRemoveCircleOutline /></RemoveBox>
    </ListItem>
  );
}

export default React.memo(TodoListItem);

//TODO react.memo를 쓰면 todo, handleRemove, handleToggle이 바뀌지 않으면 리렌더링 하지 않음