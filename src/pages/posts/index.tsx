import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import PostForm from "../../components/post/Form";
import Layout from "../../components/common/Layout";
import { useMutation } from "react-query";
import { fetchAddPosts } from "../api/posts";

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

  const postMutation = useMutation(fetchAddPosts);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    postMutation.mutate(
      {
        title,
        body,
      },
      {
        onSuccess: () => {
          window.alert("게시물이 등록되었습니다.");
          router.push("/");
        },
        onError: () => {
          window.alert("게시물 등록에 실패하였습니다. 다시 시도해 주세요.");
        },
      }
    );

    setTitle("");
    setBody("");
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
