import React, { useCallback, useState } from 'react';
import { TagBoxBlock, TagForm, Tag, TagListBlock } from './TagBox.styled';

/**
 * TODO React.memo -> useMemo
 */
const TagItem = React.memo(({ tag, onRemove }: { tag: string; onRemove: any; }) => {
    console.log(tag);
    return (
      <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
    );
  }
);

const TagList = React.memo(({ tags, onRemove }: { tags: Array<string>; onRemove: any; }) => {
  return (
    <TagListBlock>
      {tags.map((tag) => (
        <TagItem key={tag} tag={tag} onRemove={onRemove} />
      ))}
    </TagListBlock>
  );
});

function TagBox() {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTags = useCallback(
    tag => {
      if (!tag) return;
      if (localTags.includes(tag)) return;
      setLocalTags([...localTags, tag]);
    }, [localTags]
  );

  const onRemove = useCallback(
    tag => {
      setLocalTags(localTags.filter(t => t !== tag));
    }, [localTags]
  );

  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      insertTags(input.trim());
      setInput('');
    }, [input, insertTags]
  );

  return (
    <TagBoxBlock>
      <h4>TAG</h4>
      <TagForm>
        <input
          type='text'
          placeholder='태그를 입력하세요'
          defaultValue={input}
          onChange={onChange}
        />
        <button type='submit' onClick={onSubmit}>추가</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
}

export default TagBox;