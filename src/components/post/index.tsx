import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Link from "next/link";

import List from "@/components/list";
import Pagination from "@/components/common/pagination/Pagination";

import { Select, FlexLayout } from "@/styles/common.styled";

import { postT } from "@/types/post";
import { fetchPosts } from "@/pages/api/posts";
import styled from "styled-components";

const Layout = styled.div``;

function MainPost() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const postStats = useQuery("posts", fetchPosts);

  useEffect(() => {
    if (!postStats.isLoading) {
      setPosts(postStats?.data?.data);
    }
  }, [postStats.isLoading, postStats]);

  return (
    <Layout>
      <ul>
        {postStats.isLoading && (
          <li>
            <div>내역이 없습니다.</div>
          </li>
        )}
        {!postStats.isLoading &&
          posts
            .slice(offset, offset + limit)
            .map(({ id, title, body }: postT) => (
              <li key={id}>
                <Link href={`posts/${id}`}>
                  <a>
                    <List id={id} title={title} body={body} />
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
