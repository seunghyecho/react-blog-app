import React, { useState } from 'react';
import PageLayout from '@/components/common/Layout';
import SearchBar from '@/components/common/SearchBar';
import PostListContainer from '@/containers/posts/PostListContainer';
function Search() {
  const [query, setQuery] = useState('');
  const onKeyup = (e: React.KeyboardEvent) => {
    console.log(e);
  }
  return (
    <PageLayout>
      <SearchBar
        query={query}
        onChange={e => {
          setQuery(e.currentTarget.value)
        }}
        onKeyup={onKeyup}
      />
      <PostListContainer />
    </PageLayout>
  );
}
export default Search;
