import { useEffect, useState } from "react";
import styled from "styled-components";
import List from "../../components/list";

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
    fetch("/api/posts", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setPost(data.post));
  }, []);

  return (
    <CreateHomeLayout>
      <h2>
        <b>
          전체 글 <span>22</span>
        </b>
      </h2>
      <ul>
        <div>{post.id}</div>
        {LISTSAMPLE.map((item) => (
          <li key={item.id}>
            <List
              id={item.id}
              title={item.title}
              body={item.body}
              category={item.category}
              created_at={item.created_at}
            />
          </li>
        ))}
      </ul>
    </CreateHomeLayout>
  );
}
export default Home;

const LISTSAMPLE = [
  {
    id: 1,
    title: "Ditch the dreaded",
    body: "Ditch the dreaded. Semantic HTML elements we should use instead Ditch the dreaded. Semantic HTML elements we should use instead Ditch the dreaded <div />. Semantic HTML elements we should use instead Ditch the dreaded <div />. Semantic HTML elements we should use instead Semantic HTML elements we should use instead Ditch the dreaded <div />. Semantic HTML elements we should use instead Ditch the dreaded <div />. Semantic HTML elements we should use instead",
    category: "life",
    created_at: "2022.06.04",
  },
  {
    id: 2,
    title: "Ditch the dreaded",
    body: "qwer",
    category: "life",
    created_at: "2022.06.04",
  },
];
