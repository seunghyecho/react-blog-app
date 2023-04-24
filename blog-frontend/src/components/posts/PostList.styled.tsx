import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;
const PostListButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.li`
  padding: 3rem 0;

  &:first-child {
    padding-top: 0;
  }

  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }
`;

const PostItemTitle = styled.h2`
  font-weight: 600;

  a {
    margin: 0;
    font-size: 2rem;
  }

  &:hover {
    color: ${palette.gray[6]};
  }
`;
const PostItemContent = styled.p`
  margin: 2rem 0 0;

  max-height: 40px;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.53;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-word;
`;
export {
  PostListBlock,
  PostListButtonWrapper,
  PostItemBlock,
  PostItemTitle,
  PostItemContent
};
