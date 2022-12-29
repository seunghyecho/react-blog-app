import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PageLayout from "@/components/common/Layout";
import About from "@/components/Main/About";
import Post from "@/components/Main/Post";
import { fetchPosts } from "@/api/posts";
import Layout from "@/styles/main.styled";
import { FlexLayout } from "@/styles/common.styled";
import Side from "@/components/common/Layout/Side";

function Main() {
  const [page] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  const { data, isLoading } = useQuery(["posts", { page }], () =>
    fetchPosts({
      page: Number(page),
    })
  );

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
