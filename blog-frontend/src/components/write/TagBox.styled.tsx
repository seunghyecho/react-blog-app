import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';

const TagBoxBlock = styled(Responsive)`
  width: 100%;
  border-top: 1px solid ${palette.gray[2]};
  padding-top: 2rem;

  h4 {
    color: ${palette.gray[8]};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;
const TagForm = styled.form`
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid ${palette.gray[9]};

  input, button {
    ouline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }

  button {
    width: auto;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background-color: ${palette.gray[8]};
    color: ${palette.gray[0]};
    font-weight: 600;

    &:hover {
      background-color: ${palette.gray[6]};
    }
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[6]};

  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export { TagBoxBlock, TagForm, Tag, TagListBlock };