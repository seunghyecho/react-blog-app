import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';

const TagBoxBlock = styled(Responsive)`
  width: 100%;
  border-top: 1px solid ${palette.gray[2]};
  padding-top: 2rem;

  h4 {
    color: ${palette.gray[8]};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;
const TagForm = styled.form`
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid ${palette.gray[9]};

  input, button {
    ouline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }

  button {
    width: auto;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background-color: ${palette.gray[8]};
    color: ${palette.gray[0]};
    font-weight: 600;

    &:hover {
      background-color: ${palette.gray[6]};
    }
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[6]};

  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

const TagItem = React.memo(({ tag, onRemove }: { tag: string; onRemove: any; }) => <Tag
  onClick={() => onRemove(tag)}>#{tag}</Tag>);
const TagList = React.memo(({ tags, onRemove }: { tags: Array<string>; onRemove: any; }) => {
  return (
    <TagListBlock>
      {tags.map((tag) => (
        <TagItem tag={tag} onRemove={onRemove} />
      ))}
    </TagListBlock>
  );
});

function TagBox() {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const onCreate = useCallback(
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
      e.stopPropagation();
      onCreate(input);
      setInput('');
    }, [input, onCreate]
  );

  return (
    <TagBoxBlock>
      <h4>TAG</h4>
      <TagForm onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='태그를 입력하세요'
          defaultValue={input}
          onChange={onChange}
        />
        <button type='submit'>추가</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
}

export default TagBox;