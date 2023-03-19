import React from 'react';
import EditorContainer from '../../containers/write/EditorContainer';
import TagBoxContainer from '../../containers/write/TagBoxContainer';
import ActionButtonsContainer from '../../containers/write/ActionButtonsContainer';
import { FormGroup } from './Form.styled';

function Form() {
  return (
    <form>
      <FormGroup>
        <EditorContainer />
      </FormGroup>
      <TagBoxContainer />
      <ActionButtonsContainer />
    </form>
  );
}

export default Form;
