import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';
import Paginate from '../../components/paginate';
import { listPosts } from '../../modules/posts';

const PostListContainer = () => {
  // TODO pagination
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user
    })
  );

  useEffect(() => {
    dispatch(listPosts({ page }));
  }, [dispatch, page]);

  return (
    <>
      {user && <PostList loading={loading} error={error} posts={posts} />}

      <Paginate
        total={posts?.length}
        limit={limit}
        page={page}
        setPage={setPage}
        onChange={e => {
          setLimit(Number(e.currentTarget.value));
        }}
      />
    </>
  );
};
export default PostListContainer;
