import styled from 'styled-components';
import { media } from '@/styles/theme';

const Layout = styled.header`
  width: 100%;
  border-bottom: 1px solid #efefef;
`;

const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin: 0 auto;
  width: 1024px;
  height: 100px;
  box-sizing: border-box;

  ${media('desktop')`
    width:768px;
  `};

  ${media('tablet')`
    width:100%;
  `};

  span {
    &.userName {
      text-transform: uppercase;
      font-weight: 600;
    }
  }

  ul {
    display: flex;

    li {
      padding: 0 12px;

      &:last-child {
        padding-right: 0;
      }
    }
  }
`;

export { Layout, Position };