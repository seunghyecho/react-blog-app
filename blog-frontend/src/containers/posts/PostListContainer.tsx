import React from 'react';
import PostList from '@/components/posts/PostList';

const PostListContainer = ({ posts,isLoading, isError }) => {
  return (
    <PostList
      loading={isLoading}
      error={isError}
      posts={posts}
    />
  );
};
export default PostListContainer;
