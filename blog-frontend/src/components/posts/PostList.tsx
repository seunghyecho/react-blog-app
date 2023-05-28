import React from 'react';
import Link from 'next/link';
import Tags from '@/components/common/Tags';
import SubInfo from '@/components/common/SubInfo';
import { postT } from '@/types/post';
import {
  PostListBlock,
  PostItemBlock,
  PostItemContent
} from '@/components/posts/PostList.styled';

function ListItem({ post }) {
  const { title, body, user, publishedDate, tags, _id }: postT = post;
  
  return (
    <PostItemBlock>
      <h1>
        <Link href={`/posts/${_id}`}>{title}</Link>
      </h1>
      <Tags tags={tags} />
      <PostItemContent dangerouslySetInnerHTML={{ __html: body }} />
      <SubInfo
        isMarginTop
        username={user?.username}
        publishedDate={new Date(publishedDate)}
      />
    </PostItemBlock>
  );
}

function PostList({ posts, loading, error }) {
  /**
   * 글쓰기 버튼 헤더로 이동 시킴
   */

  if (error) {
    return <PostItemBlock>오류 발생!</PostItemBlock>;
  }
  
  return (
      <>
        {!loading && posts && (
          <PostListBlock>
            {posts.map(post => (
              <ListItem post={post} key={post._id} />
            ))}
          </PostListBlock>
        )}
      </>
  );
}

export default PostList;
