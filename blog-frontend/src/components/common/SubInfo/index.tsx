import Link from 'next/link';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';

const SubInfoBlock = styled.div<{ isMarginTop: boolean }>`
  ${props =>
    props.isMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${palette.gray[6]};

  span + span:before {
    padding: 0 0.25rem;
    color: ${palette.gray[4]};
    content: '\\B7';
  }
`;

function SubInfo({ username, publishedDate, isMarginTop }) {
  return (
    <SubInfoBlock isMarginTop={isMarginTop}>
      <span>
        <b>
          <Link href={`@/${username || ''}`}>
            <a>{username || ''}</a>
          </Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </SubInfoBlock>
  );
}

export default SubInfo;
