import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import PageLayout from '@/components/common/Layout';
import SearchBar from '@/components/common/SearchBar';
import PostList from '@/components/posts/PostList';
import { fetchPosts } from '@/lib/api/posts';

function Search() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [params, ]= useState({
    page:1,
    username:'',
    tag:'',
  })

  const {data, isLoading, isError} = useQuery(['posts'],() => fetchPosts({
    ...params,
  }));

   const filterItems = (data, query) => {
    
    query = query.toLowerCase();

    return data?.filter(item =>
      item.title.split(' ').some(word =>
        word.toLowerCase().includes(query)
      )
    );
  }

  const results = filterItems(data?.data, query);

  const handleChange = (e)=>{
    setQuery(e.target.value);
  };

  useEffect(()=>{
    router.replace({
      query:{
        ...params
      }
    })
  },[]);

  return (
    <PageLayout>
      <SearchBar
        query={query}
        onChange={handleChange}
      />
      <PostList
        loading={isLoading}
        error={isError}
        posts={results}
      />
    </PageLayout>
  );
}
export default Search;
