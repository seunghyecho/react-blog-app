import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import List from "../components/list";

const CreateHomeLayout = styled.div`
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;

  h2 {
    padding: 30px 0;
    border-bottom: 1px solid #efefef;
  }
`;

function Home() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((response) => response.json())
      .then((response) => setPost(response));
  }, []);

  return (
    <Layout>
      <CreateHomeLayout>
        <h2>
          <b>
            전체 글 <span className="color61">{post.length}</span>
          </b>
        </h2>
        <ul>
          {post.map(({ id, title, body, userId }) => (
            <li key={id}>
              <Link href={`posts/${id}`}>
                <a>
                  <List
                    id={id}
                    title={title}
                    body={body}
                    category={userId}
                    created_at={userId}
                  />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </CreateHomeLayout>
    </Layout>
  );
}
export default Home;

// export async function getStaticProps() {
//   const postStats = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );

//   if (!postStats) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { ...postStats },
//   };
// }
