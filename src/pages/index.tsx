import Pagination from "@/components/common/pagination/Pagination";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const postStats = useQuery("posts", fetchPosts);

  useEffect(() => {
    if (!postStats.isLoading) {
      setPosts(postStats?.data?.data);
    }
  }, [postStats.isLoading, postStats]);

  return (
    <Layout>
      <CreateHomeLayout>
        <h2>
          <b>
            전체 글<span className="color61">{posts.length}</span>
          </b>
        </h2>
        <ul>
          {postStats.isLoading && (
            <li>
              <div>내역이 없습니다.</div>
            </li>
          )}
          {!postStats.isLoading &&
            posts
              .slice(offset, offset + limit)
              .map(({ id, title, body }: postT) => (
                <li key={id}>
                  <Link href={`posts/${id}`}>
                    <a>
                      <List id={id} title={title} body={body} />
                    </a>
                  </Link>
                </li>
              ))}
        </ul>
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
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
