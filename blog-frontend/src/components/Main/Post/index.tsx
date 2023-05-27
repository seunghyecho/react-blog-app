import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import PostListContainer from '@/containers/posts/PostListContainer';
import PaginationContainer from '@/containers/posts/PaginationContainer';
import { fetchPosts } from '@/lib/api/posts';

function Post() {
  const router = useRouter();
  const [page, setPage]= useState<number>(
    router.query.page ? Number(router.query.page) : 1
  );

  const {data, isLoading, isError}= useQuery(['posts'],()=>fetchPosts({
      page,
      username:'',
      tag:''
  }));

  const lastPage = data?.headers['last-page'];

  useEffect(()=>{
    router.replace({
      query:{
        page
      }
    })
  },[page]);

  return (
    <>
      <PostListContainer 
        posts={data?.data} 
        isLoading={isLoading} 
        isError={isError}
      />
      <PaginationContainer 
        page={page} 
        setPage={setPage} 
        lastPage={Number(lastPage)}
      />
    </>
  );
}

export default Post;
