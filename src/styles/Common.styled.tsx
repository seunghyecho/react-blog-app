import styled from "styled-components";

const FlexLayout = styled.div`
  display: flex;

  &.alignItemsC {
    align-items: center;
  }

  &.justifyContentB {
    justify-content: space-between;
  }
`;

const Select = styled.select`
  padding-left: 5px;
  width: 10%;
  border-radius: 30px;
  border: 1px solid #efefef;

  &:focus,
  &:active,
  &:focus-visible {
    color: #619ffb;
    border: 1px solid #619ffb;
  }
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid #efefef;
`;

const Textarea = styled.textarea`
  padding: 10px;
  width: 100%;
  min-height: 300px;
  border-radius: 20px;
  border: 1px solid #efefef;
`;

const Label = styled.label`
  padding-left: 5px;
  width: 10%;
`;
export { Select, FlexLayout, Label, Input, Textarea };
