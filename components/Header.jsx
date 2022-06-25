import Link from "next/link";
import styled from "styled-components";
import Layout from "./Layout";
// eslint-disable-next-line import/no-unresolved
import { BiEditAlt } from "react-icons/Bi";

const HeaderLayout = styled.header`
  border-bottom: 1px solid #efefef;
`;
const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;
export default function Header() {
  return (
    <HeaderLayout>
      <Layout>
        <Position>
          <Link href="/">
            <a>SH Blog</a>
          </Link>
          <Link href="/posts">
            <a>
              <BiEditAlt size={24} />
            </a>
          </Link>
        </Position>
      </Layout>
    </HeaderLayout>
  );
}
