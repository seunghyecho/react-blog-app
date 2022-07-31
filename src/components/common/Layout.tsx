/* eslint-disable import/no-unresolved */
import styled from "styled-components";
import Header from "@/components/common/Header";

const CreateLayout = styled.div`
  margin: 0 auto 100px;
`;

function Layout({ children }) {
  return (
    <CreateLayout>
      <Header />
      <main role="main">{children}</main>
    </CreateLayout>
  );
}
export default Layout;
