import styled from "styled-components";
import { media } from "@/styles/theme";
import Header from "@/components/common/Layout/Header";

interface Props {
  children?: React.ReactNode;
}

const Layout = styled.div`
  padding-bottom: 10em;
  margin: 0 auto;

  ${media("desktop")`
    width:768px;
  `};

  ${media("tablet")`
    width:100%;
  `};
`;

function Index({ children }: Props) {
  return (
    <Layout>
      <Header />
      {children}
    </Layout>
  );
}

export default Index;
