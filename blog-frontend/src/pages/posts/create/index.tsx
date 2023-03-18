import React from 'react';
import Form from '../../../components/post/Form';
import PageLayout from '../../../components/common/Layout';
import { Layout } from '../../../lib/styles/common.styled';

function Create() {

  return (
    <PageLayout>
      <Layout>
        <Form />
      </Layout>
    </PageLayout>
  );
}

export default Create;
