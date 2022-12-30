import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PageLayout from "@/components/common/Layout";
import News from '@/components/Main/News';
import Post from "@/components/Main/Post";
import About from "@/components/Main/About";
import Side from "@/components/common/Layout/Side";
import { Layout } from "@/styles/main.styled";
import { FlexLayout } from "@/styles/common.styled";
import { fetchPosts } from "@/api/posts";

function Main() {
  const [page] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  const { data: postData, isLoading } = useQuery(["posts", { page }], () =>
    fetchPosts({
      page: Number(page),
    })
  );

  const posts = postData?.data || [];

  const tabArr = [
    {
      tab: (
        <li
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => setActiveIndex(0)}
        >
          <h2>NEWS</h2>
        </li>
      ),
      content: <News />,
    },
    {
      tab: (
        <li
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => setActiveIndex(1)}
        >
          <h2>POST</h2>
        </li>
      ),
      content: <Post data={posts} isLoading={isLoading} />,
    },
    {
      tab: (
        <li
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => setActiveIndex(2)}
        >
          <h2>ABOUT</h2>
        </li>
      ),
      content: <About />,
    },
  ];

  return (
    <PageLayout>
      <FlexLayout>
        <Layout>
          <ul>{tabArr.map(({ tab }) => tab)}</ul>
          <div>{tabArr[activeIndex].content}</div>
        </Layout>
        <Side />
      </FlexLayout>
    </PageLayout>
  );
}

export default Main;
