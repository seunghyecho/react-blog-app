// req : http.IncomingMessage의 인스턴스

import { samplePostData } from "../../../utils/posts";

// res : http.ServerResponse의 인스턴스
export default function handler(req, res) {
  if (req.method === "POST") {
    const { title, body } = req.body;
    const newPost = {
      id: new Date().toISOString(),
      title,
      body,
    };
    res.status(201).json({ message: "success!", post: newPost });
  } else {
    res.status(200).json({ message: "works!" });
  }
}

// function handler(req, res) {
//   res.status(200).json({ message: "Success" });
// }
