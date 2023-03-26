import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Tags from '../common/Tags';
import SubInfo from '../common/SubInfo';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const ContentBlock = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading }) => {
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
      <SubInfo
        isMarginTop
        username={user.username}
        publishedDate={publishedDate}
      />
      <Tags tags={tags} />
      <ContentBlock dangerouslySetInnerHTML={{ __html: body }}></ContentBlock>
    </PostViewerBlock>
  );
};
export default PostViewer;