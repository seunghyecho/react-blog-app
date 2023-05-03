import styled from 'styled-components';
import palette from '@/lib/styles/palette';

const PostListBlock = styled.ul`
  margin-top: 0;
`;

const PostItemBlock = styled.li`
  padding: 3rem 0;

  &:first-child {
    padding-top: 0;
  }

  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  a {
    font-weight: 600;

    &:hover {
    color: ${palette.gray[6]};
  }
  }
`;

const PostItemContent = styled.p`
  margin: 2rem 0 0;
  max-height: 40px;
  line-height: 1.53;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-word;
`;

export {
  PostListBlock,
  PostItemBlock,
  PostItemContent
};
