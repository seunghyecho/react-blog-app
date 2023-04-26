import React from 'react';
import Head from 'next/head';
import Form from '@/components/post/Form';
import PageLayout from '@/components/common/Layout';
import { Layout } from '@/lib/styles/common.styled';


function Create() {
  return (
    <>
      <Head>
        <title>새 글 작성하기 - React Blog App</title>
      </Head>
      
      <PageLayout>
        <Layout>
          <Form />
        </Layout>
      </PageLayout>
    </>
  );
}

export default Create;
