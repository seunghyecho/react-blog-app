import styled from 'styled-components';
import Responsive from '../../Responsive';

const Position = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  z-index: 999;
`;

const Title = styled.h1`
  font-weight: 600;
  text-transform: uppercase;
`;

const Utils = styled.ul`
  display: flex;

  li {
    padding: 0 12px;

    &:last-child {
      padding-right: 0;
    }
  }
`;

const Wrapper = styled(Responsive)`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 1.128rem;
    font-weight: 800;
    letter-spacing: 2px;

  }

  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 6rem;
`;


export { Position, Title, Utils, Wrapper, Spacer };