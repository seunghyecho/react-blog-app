import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import SubInfo from '@/components/common/SubInfo';
import Tags from '@/components/common/Tags';
import Modal from '@/components/common/Modal';
import {
  PostListBlock,
  PostListButtonWrapper,
  PostItemBlock,
  PostItemTitle,
  PostItemContent
} from '@/components/posts/PostList.styled';
import { postT } from '@/types/post';



function ListItem({ post }) {
  const { title, body, user, publishedDate, tags, _id }: postT = post;
  return (
    <PostItemBlock>
      <PostItemTitle>
        <Link href={`/posts/${_id}`}>
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
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const onCreate = ()=>{
    setModal(true);
    
  }
  const onCancel = ()=>{
    setModal(false);
  }
  const onConfirm = ()=>{
    setModal(false);
    router.push('/posts/create');
  }
  if (error) {
    return <PostItemBlock>오류 발생!</PostItemBlock>;
  }
  return (
    <>
    <PostListBlock>
      <PostListButtonWrapper>
        {showWriteButton && (
          <Link href="#">
            <Button label="새 글 작성하기" onClick={onCreate} cyan />
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
    <Modal 
        visible={modal} 
        title='포스트 등록' 
        description='포스트를 등록하시겠습니까?'
        confirmText='등록'
        onConfirm={onConfirm} 
        onCancel={onCancel} 
    />
    </>
  );
}

export default PostList;
