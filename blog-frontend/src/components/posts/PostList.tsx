import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Tags from '../common/Tags';
import SubInfo from '../common/SubInfo';
import { postT } from '../../types/post';

const ListItemBlock = styled.li`
  margin: 3rem 0;
`;
const Title = styled.strong`
  margin: 1rem 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.67;
`;
const Body = styled.p`
  margin: 1rem 0;
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

function ListItem({ post }) {
  const { title, body, user, publishedDate, tags, _id }: postT = post;
  return (
    <ListItemBlock>
      <Title>
        <Link href={`/@${user.username}/${_id}`}>{title}</Link>
      </Title>
      <SubInfo
        isMarginTop
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <Body dangerouslySetInnerHTML={{ __html: body }}/>
    </ListItemBlock>
  );
}

function PostList({ posts, loading, error }) {
  if (error) {
    return <ListItemBlock>오류 발생!</ListItemBlock>;
  }
  return (
    <>
      {!loading && posts && (
        <ul>
          {posts.map(post => (
            <ListItem post={post} key={post._id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default PostList;
