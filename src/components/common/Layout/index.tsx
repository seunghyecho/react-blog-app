import styled from 'styled-components';
import { media } from '@/styles/theme';

interface Props {
  children?: React.ReactNode;
}

const Layout = styled.div`
  padding-bottom: 10em;
  margin: 0 auto;
  width: 1024px;

  ${media('desktop')`
    width:768px;
  `};

  ${media('tablet')`
    width:100%;
  `};
`;

function Index({ children }: Props) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}

export default Index;
