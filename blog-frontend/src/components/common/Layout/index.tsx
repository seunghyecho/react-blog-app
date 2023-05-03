import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

const Layout = styled.div`
  padding-bottom: 10em;
  margin: 0 auto;
  width: 1024px;

  @media (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
  }
`;

function StyledLayout({ children }: Props) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}

export default StyledLayout;
