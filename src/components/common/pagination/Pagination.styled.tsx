import styled from "styled-components";

const CreatePaginationLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;

  button {
    margin: 0 3px;
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    border-radius: 100%;
    border: 1px solid #eee;

    &[disabled] {
      border: 1px solid #eee;
      color: #eee;
      cursor: revert;
      transform: revert;
    }

    &[aria-current] {
      border: 1px solid #619ffb;
      color: #619ffb;
      font-weight: bold;
      cursor: revert;
      transform: revert;
    }
  }
`;

export { CreatePaginationLayout };
