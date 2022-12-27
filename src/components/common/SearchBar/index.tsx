import { BiSearchAlt } from "react-icons/bi";
import Layout from "@/components/common/SearchBar/SearchBar.styled";

interface Props {
  query: string;
  onChange: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function SearchBar({ query, onChange }: Props) {
  return (
    <Layout>
      <BiSearchAlt size={24} />
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
