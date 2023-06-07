import React, { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Responsive from '@/components/common/Responsive';
import News from '@/components/Main/News';
import Post from '@/components/Main/Post';
import About from '@/components/Main/About';
import Side from '@/components/common/Side';
import { WrapperStyled, TabStyled, ContentStyled } from '@/lib/styles/main.styled';
import { FlexLayout } from '@/lib/styles/common.styled';
import { fetchNews } from '@/lib/api/news';

const MainBlock = styled(Responsive)`
  padding-bottom: 10rem;
`;

function Main() {
  const [page] = useState<number>(1);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [category, setCategory] = useState<string>('all');

  const news = useQuery(['news', { page, category }], () =>
    fetchNews({
      params: { page: Number(page) },
      category: category === 'all' ? '' : category
    }))
  ;

  const newsList = news.data?.data.articles || [];

  const handleSelect = useCallback(
    (category:string) =>
      setCategory(category)
    , []);

    const TABS = [
      {
        id:1,
        name:'POST',
        content: <Post />
      },
      {
        id:2,
        name:'NEWS',
        content: <News data={newsList} category={category} handleSelect={handleSelect} />
      },
      {
        id:3,
        name:'ABOUT',
        content: <About />
      }
    ]

  return (
    <MainBlock>
      <FlexLayout>
        <WrapperStyled>
          <TabStyled>
            {TABS.map(({ id, name }) => (
              <li
                key={id}
                className={activeIndex === (id - 1) ? 'active' : ''}
                onClick={() => setActiveIndex(id - 1)}
              >
                <h2>{name}</h2>
              </li>
            ))}
          </TabStyled>
          <ContentStyled>{TABS[activeIndex].content}</ContentStyled>
        </WrapperStyled>
        <Side />
      </FlexLayout>
    </MainBlock>
  );
}


export default Main;


