import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../../components/common/Layout";
import { useQuery } from "react-query";
import { fetchDetailPosts } from "../api/posts";

const CreateIdLayout = styled.div`
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
`;
const Title = styled.div`
  height: 100px;
  line-height: 100px;
  border-bottom: 1px solid #efefef;
  h1 {
    color: #619ffb;
  }
`;
const Body = styled.div`
  padding: 15px 0;
`;
function PostById() {
  const router = useRouter();
  const { id } = router.query;

  const detailPostStats = useQuery(["detail", id], () => fetchDetailPosts(id));
  console.log(detailPostStats);

  if (detailPostStats.isLoading) {
    return "";
  }

  return (
    <Layout>
      <CreateIdLayout>
        <Title>
          <h1>{detailPostStats.data.data.title}</h1>
        </Title>
        <Body>
          <p>{detailPostStats.data.data.body}</p>
        </Body>
      </CreateIdLayout>
    </Layout>
  );
}
export default PostById;
