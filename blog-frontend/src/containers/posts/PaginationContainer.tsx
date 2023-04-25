import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Pagination from '../../components/posts/Pagination';

function PaginationContainer() {
  const router = useRouter();
  const { username, tag, page } = router.query;

  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS']
  }));

  if (!posts || loading) return null;

  return (
    <Pagination
      tag={tag || ''}
      username={username|| ''}
      page={Number(page)}
      lastPage={lastPage}
    />
  );
}

export default PaginationContainer;
