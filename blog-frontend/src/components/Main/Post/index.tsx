import React, { useState } from "react";
import Link from "next/link";
import List from "../../list";
import Paginate from "../../paginate";

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
      <ul>
        {isLoading && (
          <li>
            <div>내역이 없습니다.</div>
          </li>
        )}

        {!isLoading &&
          data
            .slice(offset, offset + limit)
            .map(({ userId, id, title, body }) => (
              <li key={id}>
                <Link href={`posts/${id}`}>
                  <a>
                    <List userId={userId} id={id} title={title} body={body} />
                  </a>
                </Link>
              </li>
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
