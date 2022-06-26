import axios from "axios";
import { postT } from "../../../types/post";

// req : http.IncomingMessage의 인스턴스
// res : http.ServerResponse의 인스턴스
// export default function handler(
//   req: { body: { title: string; body: string }; method: string },
//   res: any
// ) {
//   const { title, body } = req.body;
//   const newPost = {
//     id: new Date().toLocaleString(),
//     title,
//     body,
//   };

//   if (req.method === "POST") {
//     res.status(201).json({ message: "success!", post: newPost });
//   } else if (req.method === "GET") {
//     res.json({ post: newPost });
//   } else {
//     res.status(200).json({ message: "Success" });
//   }
// }

export const fetchPosts = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const fetchDetailPosts = async (id: number) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const fetchAddPosts = async (posts: postT) => {
  return await axios.post("https://jsonplaceholder.typicode.com/posts", {
    ...posts,
  });
};

export const fetchPutPosts = async (posts: postT) => {
  return await axios.put("https://jsonplaceholder.typicode.com/posts", {
    ...posts,
  });
};
