import axios from 'axios';
import client from '../client';

/**
 * 게시글 리스트 조회 api
 */
const fetchPosts = async (params: any) => {
  return await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params
  });
};

const fetchDetailPosts = id => client.get(`/api/posts/${id}`);

const fetchCreatePosts = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });

/**
 * 게시글 리스트 상세 수정 api
 */
const fetchPutPosts = async ({ id, ...params }: any) => {
  return await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    ...params
  });
};

/**
 * 게시글 리스트 삭제 api
 */
const fetchDeletePosts = async (id: any) => {
  return await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};


export {
  fetchPosts,
  fetchDetailPosts,
  fetchCreatePosts,
  fetchPutPosts,
  fetchDeletePosts
};
