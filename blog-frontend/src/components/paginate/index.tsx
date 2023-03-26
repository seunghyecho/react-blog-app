import React, { Dispatch, SetStateAction } from 'react';
import Pagination from '../common/Pagination';
import { StyledSelect, FlexLayout } from '../../lib/styles/common.styled';

interface Props {
  total: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Paginate({ total, limit, page, setPage, onChange }: Props) {
  return (
    <FlexLayout>
      <Pagination total={total} limit={limit} page={page} setPage={setPage} />
      <StyledSelect name='pageLimit' id='pageLimit' value={limit} onChange={onChange}>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
      </StyledSelect>
    </FlexLayout>
  );
}

export default Paginate;
