import Layout from "@/components/common/Layout";
import Pagination from "@/components/common/pagination/Pagination";
import List from "@/components/list";
import { Select } from "@/styles/common.styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchPosts } from "../api/posts";

const Wrap = styled.div`
  margin-top: 2rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  border: 1px solid lightgrey;
  cursor: text;

  input {
    padding: 0 1.5rem;
    width: 100%;
  }
`;
function Search() {
  const router = useRouter();
  const queries = router.query;
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const { data, isLoading } = useQuery(["searches", query], fetchPosts);

  useEffect(() => {
    if (!router.isReady) return;
    // console.log(queries);
  }, [queries, router.isReady]);

  useEffect(() => {
    if (!isLoading) {
      setSearch(data?.data);
    }
  }, [data?.data, isLoading, search]);
  const handleFilter = (val: { title: string }) => {
    if (query == "") {
      return val;
    } else if (val?.title.includes(query)) {
      return val;
    }
  };

  return (
    <Layout>
      <Wrap>
        <BiSearchAlt size={24} />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="검색어를 입력하세요."
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
      </Wrap>
      <ul>
        {search
          ?.filter((val) => handleFilter(val))
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

      <Pagination
        total={search.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />

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
    </Layout>
  );
}
export default Search;
