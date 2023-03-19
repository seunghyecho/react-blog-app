import React, { useState } from 'react';
import Link from 'next/link';
import Paginate from '../../paginate';
import ListItem from '../../listItem';

interface Props {
  data?: Array<any>;
  isLoading: boolean;
}

function Post({ data, isLoading }: Props) {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <div>
      <Link href='/posts/create'>
        <a>새 글 작성하기</a>
      </Link>
      <ul>
        {!isLoading &&
          data
            .slice(offset, offset + limit)
            .map(({ userId, id, title, body }) => (
              <ListItem userId={userId} id={id} title={title} body={body} />
            ))}
      </ul>

      <Paginate
        total={data.length}
        limit={limit}
        page={page}
        setPage={setPage}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setLimit(Number(e.currentTarget.value));
        }}
      />
    </div>
  );
}

export default Post;
