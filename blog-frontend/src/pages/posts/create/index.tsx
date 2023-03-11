import React from "react";
import Form from "../../../components/post/Form";
import PageLayout from "../../../components/common/Layout";
import { useMutation } from "@tanstack/react-query";
import { fetchCreatePosts } from "../../../lib/api/posts";
import { Layout } from "../../../lib/styles/common.styled";

function Create() {
  const createMutation = useMutation(fetchCreatePosts);

  return (
    <PageLayout>
      <Layout>
        <Form formMutation={createMutation} />
      </Layout>
    </PageLayout>
  );
}

export default Create;
