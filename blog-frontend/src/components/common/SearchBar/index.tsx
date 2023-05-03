import Layout from "@/components/common/SearchBar/SearchBar.styled";
import React from "react";

interface Props {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyup: (e: React.KeyboardEvent)=> void;
}

function SearchBar({ query, onChange, onKeyup }: Props) {
  return (
    <Layout>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="검색어를 입력하세요."
        value={query}
        onChange={onChange}
        onKeyUp={onKeyup}
      />
    </Layout>
  );
}
export default SearchBar;
