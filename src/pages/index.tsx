import Link from "next/link";
import { useQuery } from "react-query";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import List from "../components/list";
import { postT } from "../types/post";
import { fetchPosts } from "./api/posts";

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
  const postStats = useQuery("posts", fetchPosts);

  if (postStats.isLoading) {
    return "";
  }

  return (
    <Layout>
      <CreateHomeLayout>
        <h2>
          <b>
            전체 글
            <span className="color61">{postStats?.data?.data.length}</span>
          </b>
        </h2>
        <ul>
          {postStats?.data?.data.map(({ id, title, body, userId }: postT) => (
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
