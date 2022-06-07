import { useState } from "react";
import Layout from "../Layout";

export default function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(title, body);

    setTitle("");
    setBody("");
  };
  return (
    <Layout>
      <form>
        <h1>Create a blog post</h1>
        <div>
          <label htmlFor="post-title">Title</label>
          <input
            type="text"
            name="post-title"
            id="post-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="post-body"></label>
          <textarea
            name="post-body"
            id="post-body"
            cols="30"
            rows="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" onClick={onSubmit}>
          등록
        </button>
      </form>
    </Layout>
  );
}
