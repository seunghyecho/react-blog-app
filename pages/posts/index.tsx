import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import PostForm from "../../components/post/Form";
// eslint-disable-next-line import/no-unresolved
import { BiHomeAlt } from "react-icons/Bi";

const CreatePostLayout = styled.div`
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
  h1 {
    height: 100px;
    line-height: 100px;
    border-bottom: 1px solid #efefef;
  }
`;
const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export default function Posts() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = (e: any, postId: any) => {
    e.preventDefault();
    console.log(title, body);

    const reqBody = { title, body };
    fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    setTitle("");
    setBody("");
    router.push("/");
  };
  return (
    <CreatePostLayout>
      <Position>
        <h1>Create a blog post</h1>
        <Link href="/">
          <a>
            <BiHomeAlt size={24} />
          </a>
        </Link>
      </Position>
      <PostForm
        title={title}
        body={body}
        onSubmit={onSubmit}
        onChangeTitle={(e) => setTitle(e.target.value)}
        onChangeBody={(e) => setBody(e.target.value)}
      />
    </CreatePostLayout>
  );
}
