import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../../components/common/Layout";
import { postT } from "../../types/post";

const CreateIdLayout = styled.div`
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;

  h1 {
    display: block;
    height: 100px;
    line-height: 1.53;
    color: #619ffb;
  }
`;
const Position = styled.div`
  border-bottom: 1px solid #efefef;
`;
function PostById() {
  const router = useRouter();
  const { id } = router.query;
  // id에는 위에 url에서 넣은 12345678이 string으로 들어가있다.

  const [post, setPost] = useState<Array<postT>>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "GET" })
      .then((response) => response.json())
      .then((response) => setPost(response));
  }, [id]);

  return (
    <Layout>
      <CreateIdLayout>
        <Position>
          <h1>{post.title}</h1>
        </Position>
        <div>{post.body}</div>
      </CreateIdLayout>
    </Layout>
  );
}
export default PostById;
