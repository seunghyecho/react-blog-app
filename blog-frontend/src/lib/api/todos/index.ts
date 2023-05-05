import client from '@/lib/api/client';

/**
 * 스케줄 조회 api
 */
const fetchTodos = () => {
  return client.get('https://jsonplaceholder.typicode.com/todos');
};

export { fetchTodos };