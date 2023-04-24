import React from 'react';
import PostListContainer from '../../../containers/posts/PostListContainer';
import PaginationContainer from '../../../containers/posts/PaginationContainer';
function Post() {
  return (
    <>
      <PostListContainer />
      <PaginationContainer />
    </>
  );
}

export default Post;
