import styled from "styled-components";

import Button from "../common/Button";

const CreateFormLayout = styled.div`
  button {
    width: 100%;
    height: 35px;
    line-height: 35px;
    border-radius: 4px;
    border: none;
    color: white;
    background: #619ffb;
    font-size: 13px;
  }
`;
const FormGroup = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  label {
    text-transform: uppercase;
    font-size: 14px;
    color: #c1c1c1;
  }
  input {
    padding: 0 10px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border: 1px solid #efefef;
    border-radius: 4px;
    height: 35px;
    line-height: 35px;

    &:focus,
    &:active {
      border-bottom: 2px solid #619ffb;
    }
  }
  textarea {
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border: 1px solid #efefef;
    border-radius: 4px;
    &:focus,
    &:active {
      border-bottom: 2px solid #619ffb;
    }
  }
`;
function PostForm({ title, body, onSubmit, onChangeTitle, onChangeBody }) {
  return (
    <CreateFormLayout>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <label htmlFor="post-title" hidden>
            Title
          </label>
          <input
            type="text"
            name="post-title"
            id="post-title"
            value={title}
            onChange={onChangeTitle}
            placeholder="제목을 입력해주세요."
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="post-body" hidden>
            Contents
          </label>
          <textarea
            name="post-body"
            id="post-body"
            cols={30}
            rows={10}
            value={body}
            onChange={onChangeBody}
            placeholder="내용을 입력해주세요."
          ></textarea>
        </FormGroup>
        <Button type="submit" label="등록" />
      </form>
    </CreateFormLayout>
  );
}

export default PostForm;
