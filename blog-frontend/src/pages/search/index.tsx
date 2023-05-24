import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import PageLayout from '@/components/common/Layout';
import SearchBar from '@/components/common/SearchBar';
import PostList from '@/components/posts/PostList';
import { fetchPosts } from '@/lib/api/posts';
import styled from 'styled-components';

const Comment = styled.p`
  margin: 1.5rem 0;
`;

function Search() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  
  // TODO page를 전체로
  const [params, ]= useState({
    page:1,
    username:'',
    tag:'',
  })

  const {data, isLoading, isError} = useQuery(['posts'],() => fetchPosts({
    ...params,
  }));

   const filteredData = (data, query) => {
    if(!query) {
      data = [];
    }

    query = query.toLowerCase();

    return data?.filter(item =>
      item.title.split(' ').some(word =>
        word.toLowerCase().includes(query)
      )
    );
  }

  const results = filteredData(data?.data, query);

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
      
      <Comment>총 <strong>{results.length}</strong>개의 포스트를 찾았습니다.</Comment>

      <PostList
        loading={isLoading}
        error={isError}
        posts={results}
      />
    </PageLayout>
  );
}
export default Search;
