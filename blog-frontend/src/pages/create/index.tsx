import React from 'react';
import { useQuery } from '@tanstack/react-query';
import PageLayout from '@/components/common/Layout';
import Form from '@/components/post/Form';
import { Layout } from '@/lib/styles/common.styled';
import { fetchReadPost } from '@/lib/api/posts';
function Create() {
  const postId = window.localStorage.getItem('_id');
  const { data, isLoading }= useQuery(['detail'], () => fetchReadPost(postId),{
    enabled:!!postId
  });

  return (
    <PageLayout>
      <Layout>
        <Form data={!isLoading && data} postId={postId}/>
      </Layout>
    </PageLayout>
  );
}

export default Create;
