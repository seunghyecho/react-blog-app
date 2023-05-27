import Link from 'next/link';
import styled from 'styled-components';
import { Tag } from '@/components/write/TagBox.styled';

const TagsBlock = styled(Tag)`
  margin-top: 0.5rem;
  display: inline-block;
`;

function Tags({ tags }) {
  return (
    <>
      {tags.map(t => (
        <TagsBlock key={t}>
          <Link href={`/?tag=${t}`} >#{t}</Link>
        </TagsBlock>
      ))}
    </>
  );
}

export default Tags;
