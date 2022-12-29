import styled from 'styled-components';

const Layout = styled.div`
  padding-right: 15px;
  width: 100%;
  box-sizing: border-box;

  > ul {
    margin-bottom: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before {
      content: "";
      display: block;
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 1px;
      background-color: #f1f1f1;
      z-index: -1;
    }

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
        border-bottom: 1px solid #619ffb;
      }
    }
  }
`;

export { Layout };
