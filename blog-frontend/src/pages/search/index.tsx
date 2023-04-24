import React from 'react';
import SearchBar from '../../components/common/SearchBar';
import PostListContainer from '../../containers/posts/PostListContainer';
function Search() {
  return (
    <>
      <SearchBar
        query={''}
        onChange={e => {
          console.log(e);
        }}
      />

      <PostListContainer />
    </>
  );
}
export default Search;
