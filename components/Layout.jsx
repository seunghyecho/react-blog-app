import styled from "styled-components";

const CreateLayout = styled.div`
  margin: 0 auto;
  width: 1260px;
`;
export default function Layout({ children }) {
  return <CreateLayout>{children}</CreateLayout>;
}
