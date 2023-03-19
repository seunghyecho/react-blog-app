import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const TagsBlock = styled.div`
  margin-top: 0.5rem;

  > * {
    display: inline-block;
    color: ${palette.cyan[7]};
    text-decoration: none;
    margin-right: 0.5rem;

    &:hover {
      color: ${palette.cyan[6]};
    }
  }
`;
const ContentBlock = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading }) => {
  console.log(post, error, loading);
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  // 로딩 중이거나 아직 포스트 데이터가 없을 경우
  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = post;
  return (
    <PostViewerBlock>
      <h1>{title}</h1>
      <p>
        <span><b>{user.username}</b></span>
        <span>{new Date(publishedDate).toLocaleDateString()}</span>
      </p>
      <TagsBlock>
        {tags.map(tag => (
          <div>#{tag}</div>
        ))}
      </TagsBlock>
      <ContentBlock dangerouslySetInnerHTML={{ __html: body }}></ContentBlock>
    </PostViewerBlock>
  );
};
export default PostViewer;