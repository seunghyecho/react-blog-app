import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import { ListItem, CheckBox, RemoveBox } from '@/components/common/Template/Template.styled';
import { Todo } from '@/components/common/Template/index';

interface Props {
  todo: Todo;
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

export default TodoListItem;