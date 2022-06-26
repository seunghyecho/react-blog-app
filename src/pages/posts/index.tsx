import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import PostForm from "../../components/post/Form";
import Layout from "../../components/common/Layout";
import axios from "axios";

const CreatePostLayout = styled.div`
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
  h1 {
    height: 100px;
    line-height: 100px;
  }
`;

export default function Posts() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(title, body);

    axios.post("/api/posts", {
      title,
      body,
    });

    setTitle("");
    setBody("");
    router.push("/");
  };
  return (
    <Layout>
      <CreatePostLayout>
        <PostForm
          title={title}
          body={body}
          onSubmit={onSubmit}
          onChangeTitle={(e) => setTitle(e.target.value)}
          onChangeBody={(e) => setBody(e.target.value)}
        />
      </CreatePostLayout>
    </Layout>
  );
}
