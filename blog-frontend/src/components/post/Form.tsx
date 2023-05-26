import React from 'react';
import EditorContainer from '@/containers/write/EditorContainer';
import TagBoxContainer from '@/containers/write/TagBoxContainer';
import ActionButtonsContainer from '@/containers/write/ActionButtonsContainer';

function Form() {
  return (
    <>
      <EditorContainer />
      <TagBoxContainer />
      <ActionButtonsContainer />
    </>
  );
}

export default Form;
