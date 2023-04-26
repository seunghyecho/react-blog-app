import styled from 'styled-components';
import Responsive from '@/components/common/Responsive';
import Tags from '@/components/common/Tags';
import SubInfo from '@/components/common/SubInfo';
import palette from '@/lib/styles/palette';
import { Helmet } from 'react-helmet-async';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;

  h2 {
    font-weight: 600;

    a {
      margin: 0;
      font-size: 2rem;
    }

    &:hover {
      color: ${palette.gray[6]};
    }
  }

  p {
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
  }
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {
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
      /** 
       * TODO 상세 버그 수정 후 확인 필요
       */
      <Helmet>
        <title>{title} - React Blog Post</title>
      </Helmet>

      <h2>{title}</h2>
      <SubInfo
        isMarginTop
        username={user.username}
        publishedDate={publishedDate}
      />
      <Tags tags={tags} />
      {actionButtons}
      <p dangerouslySetInnerHTML={{ __html: body }}></p>
    </PostViewerBlock>
  );
};
export default PostViewer;
