import axios from "axios";

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

const fetchPosts = () => {
  const data = axios.get("/api/posts");
  return data;
};
export { fetchPosts };
