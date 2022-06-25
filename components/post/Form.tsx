import Layout from "../../components/common/Layout";

export default function Form({
  title,
  body,
  onSubmit,
  onChangeTitle,
  onChangeBody,
}) {
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
            onChange={onChangeTitle}
          />
        </div>
        <div>
          <label htmlFor="post-body"></label>
          <textarea
            name="post-body"
            id="post-body"
            cols={30}
            rows={10}
            value={body}
            onChange={onChangeBody}
          ></textarea>
        </div>
        <button type="submit" onClick={onSubmit}>
          등록
        </button>
      </form>
    </Layout>
  );
}
