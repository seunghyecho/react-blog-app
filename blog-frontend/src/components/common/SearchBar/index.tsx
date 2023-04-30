import Layout from "./SearchBar.styled";

interface Props {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ query, onChange }: Props) {
  return (
    <Layout>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="검색어를 입력하세요."
        value={query}
        onChange={onChange}
      />
    </Layout>
  );
}
export default SearchBar;
