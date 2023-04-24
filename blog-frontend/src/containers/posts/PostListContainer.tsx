import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { listPosts } from '../../modules/posts';

const PostListContainer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { username, tag, page } = router.query;

  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user
    })
  );

  useEffect(() => {
    // TODO page가 없으면 1을 기본값으로 사용
    dispatch(listPosts({ tag, username, page }));
  }, [dispatch, tag, username, page]);

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
    />
  );
};
export default PostListContainer;
