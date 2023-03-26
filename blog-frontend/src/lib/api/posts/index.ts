import axios from 'axios';
import client from '../client';

/**
 * 게시글 리스트 조회 api
 */
const fetchPosts = ({ page, username, tag }) => {
  return client.get(`/api/posts`, {
    params: {
      page,
      username,
      tag
    }
  });
};
/**
 * 게시글 리스트 상세 api
 */
const fetchDetailPosts = id => client.get(`/api/posts/${id}`);
/**
 * 게시글 리스트 생성 api
 */
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
