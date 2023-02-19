import axios from 'axios';

/**
 * todo 리스트 조회 api
 */
const fetchTodos = async (params: any) => {
  return await axios.get('https://jsonplaceholder.typicode.com/todos', {
    params,
  });
};

export { fetchTodos };