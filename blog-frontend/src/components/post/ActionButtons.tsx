import { FormButton, FormButtonWrap } from './Form.styled';
import React from 'react';

const ActionButtons = ({ onPublish, onCancel, isEdit }) => {
  return (
    <FormButtonWrap>
      <FormButton type='button' label='취소' onClick={onCancel} />
      <FormButton 
        type='button' 
        label={isEdit? '게시물 수정': '게시물 등록'} 
        onClick={onPublish} 
        cyan={true} 
      />
    </FormButtonWrap>
  );
};

export default ActionButtons;