import React, { useMemo, useState } from "react";
import _ from "lodash";
import PageLayout from "@/components/common/Layout";
import Post from "@/components/Main/Post";
import SearchBar from "@/components/common/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/lib/api/posts";

function Search() {
  const [query, setQuery] = useState("");

  const { data, isLoading } = useQuery(
    ["posts", query],
    () => fetchPosts(query),
    {
      enabled: !!query,
    }
  );

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const debouncedSearch = useMemo(
    () =>
      _.debounce((query) => {
        setQuery(query);
      }, 200),
    []
  );

  const posts = data?.data || [];

  return (
    <PageLayout>
      <SearchBar query={query} onChange={handleSearch} />

      <Post data={posts} isLoading={isLoading} />
    </PageLayout>
  );
}
export default Search;
