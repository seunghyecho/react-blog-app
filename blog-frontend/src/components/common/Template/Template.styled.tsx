import styled from 'styled-components';

const Layout = styled.div`
  margin-top: 3.5rem;
  border-radius: 4px;
  overflow: hidden;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    font-size: 1.5rem;
    background-color: #619ffb;
    color: #ffffff;
  }
`;

const Content = styled.div`
  position: relative;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  height: 3rem;

  input {
    padding: 0 0.5rem;
    height: 100%;
    color: #dee2e6;
    background-color: #495057;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    color: #ffffff;
    background-color: #868e96;
    transition: 0.1s background-color ease-in;

    &:hover {
      background-color: #adb5bd;
    }
  }
`;

const ListItem = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;

  &:nth-child(even) {
    background-color: #f8f9fa;
  }

  p {
    margin-left: 0.5rem;
    flex: 1;
  }
`;

const CheckBox = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  &.completed {
    svg {
      color: #22b8cf;
    }
  }

  &.completed + p {
    color: #adb5bd;
    text-decoration: line-through;
  }
`;

const RemoveBox = styled.button`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #ff8787;
  }
`;

export { Layout, Content, Form, ListItem, CheckBox, RemoveBox };