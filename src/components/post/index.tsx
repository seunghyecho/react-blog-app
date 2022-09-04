import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Link from "next/link";

import List from "@/components/list";
import Pagination from "@/components/common/pagination/Pagination";

import { Select, FlexLayout } from "@/styles/common.styled";

import { fetchPosts } from "@/pages/api/posts";
import styled from "styled-components";

const Layout = styled.div`
position;relative;
`;

function MainPost() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const { data, isLoading } = useQuery("posts", fetchPosts);

  useEffect(() => {
    if (!isLoading) {
      setPosts(data?.data);
    }
  }, [isLoading, data?.data]);

  return (
    <Layout>
      <ul>
        {isLoading && (
          <li>
            <div>내역이 없습니다.</div>
          </li>
        )}
        {!isLoading &&
          posts
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

      <FlexLayout>
        {/* pagination */}
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />

        {/* page select option */}
        <Select
          name="pageLimit"
          id="pageLimit"
          value={limit}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setLimit(Number(e.currentTarget.value));
          }}
        >
          <option value="10">10</option>
          <option value="20">20</option>
        </Select>
      </FlexLayout>
    </Layout>
  );
}
export default MainPost;
