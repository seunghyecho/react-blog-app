import React from 'react';
import Link from 'next/link';
import Button from '../common/Button';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import {
  PostListBlock,
  PostListButtonWrapper,
  PostItemBlock,
  PostItemTitle,
  PostItemContent
} from './PostList.styled';
import { postT } from '../../types/post';

function ListItem({ post }) {
  const { title, body, user, publishedDate, tags, _id }: postT = post;
  return (
    <PostItemBlock>
      <PostItemTitle>
        <Link href={`/@${user?.username || ''}/${_id}`}>
          <a>{title}</a>
        </Link>
      </PostItemTitle>
      <SubInfo
        isMarginTop
        username={user?.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <PostItemContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostItemBlock>
  );
}

function PostList({ posts, loading, error, showWriteButton }) {
  if (error) {
    return <PostItemBlock>오류 발생!</PostItemBlock>;
  }
  return (
    <PostListBlock>
      <PostListButtonWrapper>
        {showWriteButton && (
          <Link href="/posts/create">
            <Button label="새 글 작성하기" cyan />
          </Link>
        )}
      </PostListButtonWrapper>

      {!loading && posts && (
        <ul>
          {posts.map(post => (
            <ListItem post={post} key={post._id} />
          ))}
        </ul>
      )}
    </PostListBlock>
  );
}

export default PostList;
