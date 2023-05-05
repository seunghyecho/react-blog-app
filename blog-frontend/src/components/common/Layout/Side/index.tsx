import Template from '@/components/common/Template';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '@/lib/api/todos';

function Side() {
  const { data, isLoading } = useQuery(['todos'], () => fetchTodos());
  const todos = data?.data || [];

  if(isLoading) return;

  return (
      <Template title='SCHEDULES' data={todos} />
  );
}

export default Side;
