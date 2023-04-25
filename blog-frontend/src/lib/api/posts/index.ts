import axios from 'axios';
import client from '../client';

/**
 * 게시글 조회 api
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
 * 게시글 상세 api
 */
const fetchReadPost = (id:number) => {
  return client.get(`/api/posts/${id}`)
};

/**
 * 게시글 생성 api
 */
const fetchCreatePosts = ({ title, body, tags }) =>{
  return client.post('/api/posts', { title, body, tags });
}


/**
 * 게시글 수정 api
 */
const fetchUpdatePost = ({ id, title, body, tags }) => {
  return client.patch(`api/posts/${id}`, {
    id, 
    title, 
    body, 
    tags
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
  fetchReadPost,
  fetchCreatePosts,
  fetchUpdatePost,
  fetchDeletePosts
};
