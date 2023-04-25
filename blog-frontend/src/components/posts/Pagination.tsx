import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import Button from '../common/Button';
import Link from 'next/link';

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;
const PageNumber = styled.div``;

function buildLink({ username, tag, page }) {
  const query = qs.stringify({ tag, page });
  return username && `/?${query}`;
}

function Pagination({ page, lastPage, username, tag }) {
  return (
    <PaginationBlock>
      <Link
        href={page === 1 ? '' : buildLink({ username, tag, page: page - 1 })}
      >
        <Button label="이전" disabled={page === 1} />
      </Link>
      <PageNumber>{page}</PageNumber>
      <Link
        href={
          page === lastPage ? '' : buildLink({ username, tag, page: page + 1 })
        }
      >
        <Button label="다음" disabled={page === lastPage} />
      </Link>
    </PaginationBlock>
  );
}
export default Pagination;
