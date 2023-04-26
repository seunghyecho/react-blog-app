import Link from 'next/link';
import styled from 'styled-components';
import palette from '@/lib/styles/palette';

const TagsBlock = styled.div`
  margin-top: 0.5rem;

  a {
    margin-right: 0.5rem;
    display: inline-block;
    text-decoration: none;
    color: ${palette.cyan[7]};
    font-weight: 600;

    &:hover {
      color: ${palette.cyan[6]};
    }
  }
`;

function Tags({ tags }) {
  return (
    <TagsBlock>
      {tags.map(tag => (
        <Link href={`/?tag=${tag}`} key={tag}>
          #{tag}
        </Link>
      ))}
    </TagsBlock>
  );
}

export default Tags;
