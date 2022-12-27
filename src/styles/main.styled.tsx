import styled from "styled-components";

const Layout = styled.div`
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;

  > ul {
    margin-top: 4.5rem;
    margin-bottom: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      width: 100px;
      height: 50px;
      line-height: 50px;
      transition: all 0.25s ease-in-out 0s;
      font-weight: 600;
      box-sizing: border-box;
      cursor: pointer;

      &.active {
        color: #619ffb;
        border-bottom: 2px solid #619ffb;
      }
    }
  }
`;

export default Layout;
