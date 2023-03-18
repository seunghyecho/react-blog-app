import React, { useState } from 'react';
import {
  FormGroup,
  FormLabel,
  FormButtonWrap,
  FormButton
} from './Form.styled';
import { useRouter } from 'next/router';
import {
  useMutation,
  UseMutationResult,
  useQueryClient
} from '@tanstack/react-query';
import { fetchDeletePosts } from '../../lib/api/posts';
import TagBox from '../write/TagBox';
import EditorContainer from '../../containers/write/EditorContainer';
import TagBoxContainer from '../../containers/write/TagBoxContainer';

interface Props {
  data?: any;
  formMutation: UseMutationResult<any, unknown, any, unknown>;
}

function Form({ data, formMutation }: Props) {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();
  const isUpdate = !!data;

  const [title] = useState('');
  const [body] = useState('');

  const deleteMutation = useMutation(() => fetchDeletePosts(id), {
    onSuccess: (data) => {
      alert(data);
    },
    onError: () => {
      window.alert('오류');
    }
  });

  const handleGoList = () => {
    router.push('/');
  };

  const handleGoEdit = () => {
    router.push(`/posts/${id}`);
  };

  const onCancel = () => {
    if (deleteMutation.isLoading) return;
    const check = window.confirm('삭제하시겠습니까?');
    if (check) deleteMutation.mutate();
  };

  const onPublish = () => {
    const params = {
      title,
      body,
      userId: 1
    };
    formMutation.mutate(params, {
      onSuccess: ({ message }) => {
        alert(message);
        queryClient.invalidateQueries(['posts']);
        router.push('/');
      },
      onError: () => {
        alert('오류');
      }
    });
  };

  return (
    <form onSubmit={onPublish}>
      <FormGroup>
        <EditorContainer />
        <TagBoxContainer />
      </FormGroup>

      {/* 게시글 하단 버튼 */}
      {!isUpdate && (
        <FormButtonWrap>
          <FormButton type='button' label='목록' onClick={handleGoList} />
          <FormButton type='button' label='게시물 등록' onClick={onPublish} cyan={true} />
        </FormButtonWrap>
      )}

      {isUpdate && (
        <FormButtonWrap>
          <FormButton type='submit' label='수정' onClick={handleGoEdit} />
          <FormButton type='button' label='삭제' onClick={onCancel} />
        </FormButtonWrap>
      )}
    </form>
  );
}

export default Form;
