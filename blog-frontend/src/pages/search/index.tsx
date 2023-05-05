import React, { useState } from 'react';
import PageLayout from '@/components/common/Layout';
import SearchBar from '@/components/common/SearchBar';
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
    </PageLayout>
  );
}
export default Search;
