import styled from "styled-components";
import Header from "./Header";

const CreateLayout = styled.div`
  margin: 0 auto;
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
