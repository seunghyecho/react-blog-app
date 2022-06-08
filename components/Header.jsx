import Link from "next/link";
import styled from "styled-components";
import Layout from "./Layout";

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
            <a>SH Devlog</a>
          </Link>
          <Link href="/posts">
            <a>Go post!</a>
          </Link>
        </Position>
      </Layout>
    </HeaderLayout>
  );
}
