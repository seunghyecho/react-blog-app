import React, { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PageLayout from '../components/common/Layout';
import News from '../components/Main/News';
import Post from '../components/Main/Post';
import About from '../components/Main/About';
import Side from '../components/common/Layout/Side';
import { fetchPosts } from '../lib/api/posts';
import { fetchNews } from '../lib/api/news';
import { Layout } from '../lib/styles/main.styled';
import { FlexLayout } from '../lib/styles/common.styled';

function Main() {
  const [page] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [category, setCategory] = useState('all');

  const postData = useQuery(['posts', { page }], () =>
    fetchPosts({
      page: Number(page)
    })
  );

  const newsData = useQuery(['news', { page, category }], () =>
    fetchNews({
      params: { page: Number(page) },
      category: category === 'all' ? '' : category
    }))
  ;

  const posts = postData.data?.data || [];
  const news = newsData.data?.data.articles || [];

  const handleSelect = useCallback(
    category =>
      setCategory(category)
    , [category]);

  const tabArr = [
    {
      tab: (
        <li
          className={activeIndex === 0 ? 'active' : ''}
          onClick={() => setActiveIndex(0)}
        >
          <h2>NEWS</h2>
        </li>
      ),
      content: <News data={news} category={category} handleSelect={handleSelect} />
    },
    {
      tab: (
        <li
          className={activeIndex === 1 ? 'active' : ''}
          onClick={() => setActiveIndex(1)}
        >
          <h2>POST</h2>
        </li>
      ),
      content: <Post data={posts} isLoading={postData.isLoading} />
    },
    {
      tab: (
        <li
          className={activeIndex === 2 ? 'active' : ''}
          onClick={() => setActiveIndex(2)}
        >
          <h2>ABOUT</h2>
        </li>
      ),
      content: <About />
    }
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