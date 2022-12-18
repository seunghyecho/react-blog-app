import styled from "styled-components";

const FormGroup = styled.div`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #efefef;

  h1 {
    color: #619ffb;
  }

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

  input {
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border-bottom: 1px solid #efefef;
    height: 35px;
    line-height: 35px;

    &:focus,
    &:active {
      border-bottom: 2px solid #619ffb;
    }
  }

  textarea {
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border: none;
    border-radius: 4px;

    &:focus,
    &:active {
      border-bottom: 2px solid #619ffb;
    }
  }
`;

const FormLabel = styled.label`
  text-transform: uppercase;
  font-size: 14px;
  color: #c1c1c1;
  white-space: nowrap;

  & + * {
    padding-left: 20px;
  }
`;

const FormButtonWrap = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
`;

const FormContent = styled.div`
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
`;

export { FormGroup, FormLabel, FormButtonWrap, FormContent };
