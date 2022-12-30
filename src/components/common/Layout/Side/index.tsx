import styled from 'styled-components';
import Template from '@/components/common/Template';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '@/api/todos';
import { useState } from 'react';

const Layout = styled.div`
  width: 300px;
`;

function Side() {
  const [page] = useState(1);
  const { data, isLoading } = useQuery(['todos', { page }], () =>
    fetchTodos({
      page: Number(page),
    }),
  );
  const todos = data?.data || [];

  if (!isLoading) {
    return (
      <Layout>
        <Template title='SCHEDULES' data={todos} />
      </Layout>
    );
  }

}

export default Side;
