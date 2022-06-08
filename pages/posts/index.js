import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Form from "../../components/post/Form";

export default function Posts() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();
  const onSubmit = (e, postId) => {
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
  };
  return (
    <Form
      title={title}
      body={body}
      onSubmit={onSubmit}
      onChangeTitle={(e) => setTitle(e.target.value)}
      onChangeBody={(e) => setBody(e.target.value)}
    />
  );
}
