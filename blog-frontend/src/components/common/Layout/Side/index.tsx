import Template from '@/components/common/Template';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '@/lib/api/todos';
import { useState } from 'react';

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
        <Template title='SCHEDULES' data={todos} />
    );
  }

}

export default Side;
