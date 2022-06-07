import styled from "styled-components";

const CreateLayout = styled.div`
  width: 1260px;
  margin: 0 auto;
`;
export default function Layout({ children }) {
  return <CreateLayout>{children}</CreateLayout>;
}
