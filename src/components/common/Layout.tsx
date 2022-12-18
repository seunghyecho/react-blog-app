import styled from "styled-components";
import Header from "@/components/common/Header";

const CreateLayout = styled.div`
  margin: 0 auto 100px;
  width: 600px;
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
