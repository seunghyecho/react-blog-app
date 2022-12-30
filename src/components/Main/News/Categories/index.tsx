import styled from 'styled-components';

const Layout = styled.ul`
  display: flex;

  @media screen and(max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.li`
  margin: 0 1rem;
  padding: 0.25rem 0;
  cursor: pointer;
  white-space: pre;

  &:hover {
    color: #495057;
  }
`;

const categories = [
  {
    name: 'all',
    text: '전체',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

function Categories() {
  return (
    <Layout>
      {categories.map((c) => (
        <Category key={c.name}>{c.text}</Category>
      ))}
    </Layout>
  );
}

export default Categories;