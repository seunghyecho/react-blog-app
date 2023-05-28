import { useDispatch } from 'react-redux';
import { changeField } from '@/modules/write';
import TagBox from '@/components/write/TagBox';

const TagBoxContainer = () => {
  const dispatch = useDispatch();
  
  const onChangeTags = nextTags => {
    dispatch(
      changeField({
        key: 'tags',
        value: nextTags
      })
    );
  };

  return (
    <TagBox
      onChangeTags={onChangeTags}
      tags={[]}
    />
  );
};
export default TagBoxContainer;