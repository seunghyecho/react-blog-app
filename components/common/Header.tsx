import Link from "next/link";
import styled from "styled-components";
// eslint-disable-next-line import/no-unresolved
import { BiEditAlt } from "react-icons/Bi";

const CreateHeaderWrapper = styled.header`
  padding: 0 15px;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  border-bottom: 1px solid #efefef;
`;
const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

function Header() {
  return (
    <CreateHeaderWrapper>
      <Position>
        <h1>
          <Link href="/">
            <a>SH Blog</a>
          </Link>
        </h1>

        <Link href="/posts">
          <a>
            <BiEditAlt size={24} />
          </a>
        </Link>
      </Position>
    </CreateHeaderWrapper>
  );
}
export default Header;
