import styled from 'styled-components';
import palette from '@/lib/styles/palette';

const WrapperStyled = styled.div`
  padding-right: 15px;
  width: 80%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding-right: 0;
    width: 100%;
  }
`;

const TabStyled = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 6rem;

    &::before {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color:${palette.gray[1]};
      z-index: -1;
    }

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      width: 100px;
      height: 6rem;
      line-height: 6rem;
      transition: all 0.25s ease-in-out 0s;
      font-weight: 600;
      box-sizing: border-box;
      cursor: pointer;

      &.active {
        color: ${palette.cyan[5]};
        border-bottom: 1px solid ${palette.cyan[5]};
      }
    }
`;

const ContentStyled = styled.div`
    margin-top: 3rem;
`;

export { WrapperStyled, TabStyled, ContentStyled};
