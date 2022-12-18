import React, { useState } from "react";
import PageLayout from "@/components/common/Layout";
import styled from "styled-components";
import About from "@/components/Main/About";
import Post from "@/components/Main/Post";
import { useQuery } from "react-query";
import { fetchPosts } from "@/api/posts";

const Layout = styled.div`
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;

  > ul {
    margin-top: 4.5rem;
    margin-bottom: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      width: 100px;
      height: 50px;
      line-height: 50px;
      transition: all 0.25s ease-in-out 0s;
      font-weight: 600;
      box-sizing: border-box;
      cursor: pointer;
      &.active {
        color: #619ffb;
        border-bottom: 2px solid #619ffb;
      }
    }
  }
`;

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { data, isLoading } = useQuery("posts", fetchPosts);

  const posts = data?.data || [];

  const tabArr = [
    {
      tab: (
        <li
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => setActiveIndex(0)}
        >
          <h2>글</h2>
        </li>
      ),
      content: <Post data={posts} isLoading={isLoading} />,
    },
    {
      tab: (
        <li
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => setActiveIndex(1)}
        >
          <h2>소개</h2>
        </li>
      ),
      content: <About />,
    },
  ];

  return (
    <PageLayout>
      <Layout>
        <ul>{tabArr.map(({ tab }) => tab)}</ul>
        <div>{tabArr[activeIndex].content}</div>
      </Layout>
    </PageLayout>
  );
}
export default Home;
