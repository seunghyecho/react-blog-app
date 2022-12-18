import axios from "axios";
/**
 * 게시글 리스트 조회 api
 */
const fetchPosts = async (params: any) => {
  return await axios.get("https://jsonplaceholder.typicode.com/posts", {
    params,
  });
};

/**
 * 게시글 리스트 상세 api
 */
const fetchDetailPosts = async (id: number) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

/**
 * 게시글 리스트 생성 api
 */
const fetchAddPosts = async (params: any) => {
  return await axios.post("https://jsonplaceholder.typicode.com/posts", params);
};

/**
 * 게시글 리스트 상세 수정 api
 */
const fetchPutPosts = async ({ id, ...params }: any) => {
  return await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    ...params,
  });
};

/**
 * 게시글 리스트 삭제 api
 */
const fetchDeletePosts = async (id: number) => {
  return await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export {
  fetchPosts,
  fetchDetailPosts,
  fetchAddPosts,
  fetchPutPosts,
  fetchDeletePosts,
};
