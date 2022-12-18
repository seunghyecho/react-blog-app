import React, { useState } from "react";
import Button from "@/components/common/Button";
import {
  FormGroup,
  FormLabel,
  FormButtonWrap,
} from "@/components/post/Form.styled";
import { useRouter } from "next/router";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { fetchDeletePosts } from "@/api/posts";

interface Props {
  data?: any;
  formMutation: UseMutationResult<any, unknown, any, unknown>;
}
function Form({ data, formMutation }: Props) {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();
  const isUpdate = !!data;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const deleteMutation = useMutation(() => fetchDeletePosts(id), {
    onSuccess: (data) => {
      alert(data);
    },
    onError: () => {
      window.alert("오류");
    },
  });

  const handleGoList = () => {
    router.push("/");
  };

  const handleGoEdit = () => {
    router.push(`/posts/${id}`);
  };

  const handleDelete = () => {
    if (deleteMutation.isLoading) return;
    const check = window.confirm("삭제하시겠습니까?");
    if (check) deleteMutation.mutate();
  };

  const handleCreate = () => {
    const params = {
      title,
      body,
      userId: 1,
    };
    formMutation.mutate(params, {
      onSuccess: ({ message }) => {
        alert(message);
        queryClient.invalidateQueries(["posts"]);
        router.push("/");
      },
      onError: () => {
        alert("오류");
      },
    });
  };

  return (
    <form onSubmit={handleCreate}>
      <FormGroup>
        <FormLabel htmlFor="post-title">제목</FormLabel>

        <input
          type="text"
          name="post-title"
          id="post-title"
          value={isUpdate ? data.title : title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.currentTarget.value)
          }
          placeholder="제목을 입력해주세요."
        />
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="post-body">내용</FormLabel>

        <textarea
          placeholder="내용을 입력해주세요."
          name="post-body"
          id="post-body"
          cols={30}
          rows={10}
          value={isUpdate ? data.body : body}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setBody(e.currentTarget.value)
          }
        ></textarea>
      </FormGroup>

      {/* 게시글 하단 버튼 */}
      {!isUpdate && (
        <FormButtonWrap>
          <Button type="button" label="목록" onClick={handleGoList} />
          <Button type="button" label="등록" onClick={handleCreate} />
        </FormButtonWrap>
      )}

      {isUpdate && (
        <FormButtonWrap>
          <Button type="submit" label="수정" onClick={handleGoEdit} />
          <Button type="button" label="삭제" onClick={handleDelete} />
        </FormButtonWrap>
      )}
    </form>
  );
}

export default Form;
