import React from "react";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  // id에는 위에 url에서 넣은 12345678이 string으로 들어가있다.
  return (
    <>
      <div>{id}</div>
    </>
  );
}
